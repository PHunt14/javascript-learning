function countUp (nr) {
    console.log(nr)
    if (nr === 10) {
        return nr;
    }
    else if (nr < 10) {
        countUp(++nr);
    }
}

countUp(-11);