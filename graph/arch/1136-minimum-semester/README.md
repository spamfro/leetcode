# 1136. Parallel Courses

## References

- https://leetcode.com/problems/parallel-courses/
- https://leetcode.com/explore/learn/card/graph/623/kahns-algorithm-for-topological-sorting/3954/

## Description

You are given an integer n, which indicates that there are n courses labeled from 1 to n. You are also given an array relations where relations[i] = [prevCoursei, nextCoursei], representing a prerequisite relationship between course prevCoursei and course nextCoursei: course prevCoursei has to be taken before course nextCoursei.

In one semester, you can take any number of courses as long as you have taken all the prerequisites in the previous semester for the courses you are taking.

Return the minimum number of semesters needed to take all courses. If there is no way to take all the courses, return -1.

Constraints:

- 1 <= n <= 5000
- 1 <= relations.length <= 5000
- relations[i].length == 2
- 1 <= prevCoursei, nextCoursei <= n
- prevCoursei != nextCoursei
- All the pairs [prevCoursei, nextCoursei] are unique.

## Test
```
node test
```

## Performance
```
seq 5 | xargs -L1 time node minimum-semesters-kahn 10000
seq 5 | xargs -L1 time node minimum-semesters-dfs 10000
```
