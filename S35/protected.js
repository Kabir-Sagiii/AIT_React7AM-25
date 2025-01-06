"use strict";
class MyNotification {
    getNotified() {
        console.log("notified");
    }
    display() {
        this.getNotified();
    }
}
class TextNotification extends MyNotification {
    print() {
        this.getNotified();
    }
}
var n1 = new MyNotification();
n1.display();
n1.getNotified;
