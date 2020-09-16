actor Project {
    stable var name : Text = "New Syra Project";

    public query func getName(): async Text {
        name;
    };

    public func setName(newName: Text) {
        name := newName;
    }
}