type Beanz = {
    Cornbread?: string;
}

function doSomething(beanz: Beanz): boolean {
    if (beanz.Cornbread) {
        return true;
    }
    else {
        return false;
    }   
}

enum TSEnum {
    Foo,
    Bar,
    Baz,
}

