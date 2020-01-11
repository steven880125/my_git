# Using Python to get JSON from http and save as json file
# by seaniwei

import requests
import json
data = requests.get(url="http://opendata.khcc.gov.tw/public/OD_ksml_info.ashx")
with open("music.json","w",encoding="utf-8") as myFile:
    json.dump(data.json(), myFile,ensure_ascii=False)
myFile.close()
