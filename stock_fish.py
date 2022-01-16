from stockfish import Stockfish
from flask import Flask, json, request
from flask_cors import CORS


api = Flask(__name__)
CORS(api)
stockfish = Stockfish("C:/Users/trifo/Desktop/stockfish_14.1_win_x64_avx2/stockfish_14.1_win_x64_avx2.exe")


@api.route('/')
def get_move():
    preset = request.args.get('move')
    stockfish.set_fen_position(preset)
    a = stockfish.get_best_move_time(200)
    print(a)
    return str(a)

if __name__ == '__main__':
    api.run(debug=True, port=5000)