from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

from pymongo import MongoClient

import certifi

ca = certifi.where()

client = MongoClient('mongodb+srv://test:test@cluster0.u2iw4lb.mongodb.net/Cluster0?retryWrites=true&w=majority', tlsCAFile=ca)
db = client.dbsparta

db.grboy.delete_one({'1':'1'})

@app.route('/')
def home():
    return render_template('index.html')


@app.route('/comment', methods=['GET'])
def comment():
    return render_template('comment.html')


@app.route("/grboy/done", methods=["POST"])
def homework_post():
    name_receive = request.form['name_list']
    comment_receive = request.form['comment_list']

    doc = {
        'name_list': name_receive,
        'comment_list': comment_receive
    }
    db.grboy.insert_one(doc)

    return jsonify({'msg': '응원 남기기 성공!'})


@app.route("/grboy", methods=["GET"])
def homework_get():
    all_usercomment = list(db.grboy.find({}, {'_id': False}))
    return jsonify({'usercomment': all_usercomment})


if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)


