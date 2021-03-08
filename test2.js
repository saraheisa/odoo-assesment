// A function to generate a number in a specified range
const generateRandomNumber = (min, max) => Math.floor(Math.random() * (max - min) + min);

const guessUsingRandomness = (hiddenNumber) => {
    let tries = 1;
    const MAX_NUMBER_OF_TRIES = 50;
    const MIN_RANGE = 1;
    const MAX_RANGE = 1000000;

    function verify(guessedNumber) {
        return guessedNumber === hiddenNumber
            ? 0
            : hiddenNumber > guessedNumber
                ? 1
                : -1;
    }
    return {
        solve(min=MIN_RANGE, max=MAX_RANGE) {
            let guessedNumber = generateRandomNumber(min, max);

            const verified = verify(guessedNumber);

            if (verified === 0) {
                console.log(`It's ${guessedNumber} got the number  in ${tries} tries Nailed it!!`);
                return;
            }

            if (verified === -1) max = guessedNumber - 1;
            else min = guessedNumber + 1;
            tries += 1;
            this.solve(min, max);
        }
    }
}

const getAverage = (lower, upper) => Math.floor((lower + upper) / 2);

const guess = (hiddenNumber) => {
    let tries = 0;
    const MAX_NUMBER_OF_TRIES = 50;
    const MIN_RANGE = 1;
    const MAX_RANGE = 1000000;

    function verify(guessedNumber) {
        return guessedNumber === hiddenNumber
            ? 0
            : guessedNumber > hiddenNumber
                ? -1
                : 1;
    }

    return {
        solve(min=MIN_RANGE, max=MAX_RANGE) {

            if (++tries === this.MAX_NUMBER_OF_TRIES) {
                console.log(`I'm a loser`);
                return;
            }

            let avgNumber = generateRandomNumber(min, max);

            const avgSolution = verify(avgNumber);
            const minSolution = verify(min);

            if (avgSolution === 0) {
                console.log(`It's ${avgNumber} got the number  in ${tries} tries Nailed it!!`);
                return;
            }
            
            if (verify(min) * verify(avgNumber) < 0) {
                this.solve(min, avgNumber);
            } else {
                this.solve(avgNumber, max);
            }
        }
    }

}

const guess1 = guess(30);
guess1.solve(min = 10, max = 50);

const guess2 = guess(148623);
guess2.solve();
