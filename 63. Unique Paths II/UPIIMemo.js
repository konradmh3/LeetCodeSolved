/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    var rows = obstacleGrid.length
    var cols = obstacleGrid[0].length
    return(getPaths(obstacleGrid, memo={}, 0, 0, rows, cols));
};

var getPaths = function(obstacleGrid, memo, m, n, rows, cols){
        if(memo[m + "," + n]){
            return memo[m + "," + n];
        }
            
        if(m === rows || n === cols){
            return 0;
        }
        if(obstacleGrid[m][n]===1){
            return 0;
        }
        
        if(m === rows-1 && n===cols-1){
            return 1;
        }

        memo[m + "," + n] = getPaths(obstacleGrid, memo, m+1, n, rows, cols)+getPaths(obstacleGrid, memo, m, n+1, rows, cols)

        return (memo[m + "," + n])
};