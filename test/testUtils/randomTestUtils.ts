/*/
 * Simulate a function a given number of times with constant arguments
 *
 * Usage: simulator(numTimes)(func, args)(condition)
 *      numTimes is number of times to simulate
 *      func and args is the function and arguments to simulate
 *      condition is a condition that should remain true for all invocations of func with args
/*/
export const simulator = <ReturnT>(numTimes: number) =>
    <ReturnT>(func: (...args: any) => ReturnT, ...args: any[]) => 
        ( condition: (generated: ReturnT) => boolean): boolean => {
            for (let i = 0; i < numTimes; i++) {
                const generatedValue = func(...args);
                if (!condition(generatedValue)) {
                    return false;
                }
            }
            return true;
        }