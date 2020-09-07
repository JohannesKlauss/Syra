actor User {
    stable var userId : Nat = 1000;

    public func newUser(): async () {
        userId += 1;
    };

    public query func getUserId(): async Nat {
        userId;
    };
}