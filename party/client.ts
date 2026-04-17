import PartySocket from "partysocket";
import { useGameStore } from "@/store/useGameStore";

const PARTYKIT_HOST = process.env.NEXT_PUBLIC_PARTYKIT_HOST || "localhost:1999";

class SocketManager {
  private socket: PartySocket | null = null;
  private roomId: string | null = null;
  public isConnected = false;
  private pendingMessages: any[] = [];
  private connectionPromise: Promise<void> | null = null;

  connect(roomId: string): Promise<void> {
    if (this.socket && this.roomId === roomId && this.isConnected) {
      return Promise.resolve();
    }

    if (this.connectionPromise && this.roomId === roomId) {
      return this.connectionPromise;
    }

    if (this.socket) {
      this.socket.close();
      this.isConnected = false;
    }

    this.roomId = roomId;
    this.pendingMessages = [];

    this.connectionPromise = new Promise((resolve, reject) => {
      this.socket = new PartySocket({
        host: PARTYKIT_HOST,
        room: roomId,
      });

      this.socket.addEventListener("open", () => {
        console.log("Connected to room:", roomId);
        this.isConnected = true;
        this.pendingMessages.forEach((msg) =>
          this.socket?.send(JSON.stringify(msg)),
        );
        this.pendingMessages = [];
        resolve();
      });

      this.socket.addEventListener("message", (event) => {
        try {
          const data = JSON.parse(event.data);
          if (data.type === "sync" && data.state) {
            useGameStore.getState().syncState(data.state);
          }
        } catch (err) {
          console.error("Failed to parse message:", err);
        }
      });

      this.socket.addEventListener("close", () => {
        console.log("Disconnected from room:", roomId);
        this.isConnected = false;
      });

      this.socket.addEventListener("error", (err) => {
        console.error("Socket error:", err);
        reject(err);
      });
    });

    return this.connectionPromise;
  }

  send(message: any) {
    if (this.socket?.readyState === WebSocket.OPEN) {
      this.socket.send(JSON.stringify(message));
    } else {
      this.pendingMessages.push(message);
    }
  }

  disconnect() {
    if (this.socket) {
      this.socket.close();
      this.socket = null;
      this.roomId = null;
      this.isConnected = false;
      this.pendingMessages = [];
      this.connectionPromise = null;
    }
  }
}

export const socketManager = new SocketManager();
