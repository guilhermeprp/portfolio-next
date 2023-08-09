class LocalStorage {
	private static _instance: LocalStorage;
	private _storage: Storage;

	private constructor() {
		this._storage = window.localStorage;
	}

	public static get instance(): LocalStorage {
		if (!LocalStorage._instance) {
			LocalStorage._instance = new LocalStorage();
		}
		return LocalStorage._instance;
	}

	public setItem(key: string, value: string): void {
		this._storage.setItem(key, value);
	}

	public getItem(key: string): string {
		return this._storage.getItem(key) as string;
	}

	public removeItem(key: string): void {
		this._storage.removeItem(key);
	}

	public clear(): void {
		this._storage.clear();
	}
}

class SessionStorage {
	private static _instance: SessionStorage;
	private _storage: Storage;

	private constructor() {
		this._storage = window.sessionStorage;
	}

	public static get instance(): SessionStorage {
		if (!SessionStorage._instance) {
			SessionStorage._instance = new SessionStorage();
		}
		return SessionStorage._instance;
	}

	public setItem(key: string, value: string): void {
		this._storage.setItem(key, value);
	}

	public getItem(key: string): string {
		return this._storage.getItem(key) as string;
	}

	public removeItem(key: string): void {
		this._storage.removeItem(key);
	}

	public clear(): void {
		this._storage.clear();
	}
}

export { LocalStorage, SessionStorage };