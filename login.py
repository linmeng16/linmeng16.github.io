from flask import Flask 
from flask import request

app = Flask(__name__)

app.debug=1

@app.route('/',methods=['GET','POST'])
def hell_world():
    if request.method == 'POST':
        return 'l from POST'
    else:
        return 'l from GET'
#增加一个子目录网址
# @app.route('/l')
# def get_l():
#     return 'LLLMMM'

@app.route('/m')
def get_m():
    return '11001'

#用户资料endpoint
@app.route('/userProfile',methods=["GET","POST"])
def get_profile():
    if request.method == "GET":
        name = request.args.get('name','')
        print(name)
        if(name =='luotuo'):
            return dict(name="luotuo", fans=1)
        else:
            return dict(name="bushi1", fans=2)
            
    elif request.method =="POST":
        print(request.form)
        print(request.data)
        print(request.json)
        name = request.json.get("name")
    #     if(name =='luotuo'):
    #         return dict(name="luotuo from POST", fans=3)
    #     else:
    #         return dict(name="bushi luotuo from POST", fans=4)
        # return "1"

if __name__== '__main__':
    app.run()

