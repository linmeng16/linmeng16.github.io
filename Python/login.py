# 连接mysql数据库

import pymysql

conn = pymysql.connect(host="localhost",
                       user = "linmeng",
                       password = "@LinMeng2023",
                       db = "lm_qsg",
                       port = "3306",
                       charset = "utf8"
                       )

#游标
cur = conn.cursor()
cur2 = conn.cursor()

cur.execute("SELECT * FROM lm_qsg")
cur2.execute("desc lm")

result = cur.fetchall()
result2 = cur2.fetchall()

print(result)
print(result2)