interface Notify {
    getNotification():void;
    addNewNotification():string;
}

class MyNotified implements Notify{
    getNotification(): void {
        
    }

    addNewNotification(): string {
        return ""
    }
}