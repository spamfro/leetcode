# Table: LogInfo

+-------------+----------+
| Column Name | Type     |
+-------------+----------+
| account_id  | int      |
| ip_address  | int      |
| login       | datetime |
| logout      | datetime |
+-------------+----------+
There is no primary key for this table, and it may contain duplicates.
The table contains information about the login and logout dates of Leetflex accounts. It also contains the IP address from which the account was logged in and out.
It is guaranteed that the logout time is after the login time.
 

Write an SQL query to find the account_id of the accounts that should be banned from Leetflex. An account should be banned if it was logged in at some moment from two different IP addresses.

Return the result table in any order.
