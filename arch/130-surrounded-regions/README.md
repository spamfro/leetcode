# 130. Surrounded Regions

LC: https://leetcode.com/problems/surrounded-regions/  
AR: 37.2%  
KEY: union find, search, graph, matrix  

Given an m x n matrix board containing 'X' and 'O', capture all regions that are 4-directionally surrounded by 'X'.

A region is captured by flipping all 'O's into 'X's in that surrounded region.

Constraints:
- m == board.length
- n == board[i].length
- 1 <= m, n <= 200
- board[i][j] is 'X' or 'O'.

## Solution
![lc130.png](./lc130.png)
![lc130-dfs-2.png](./lc130-dfs-2.png)