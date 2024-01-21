import random

# Array of all possible options in the Rock Paper Scissors game
game_choices = ["rock", "paper", "scissors"]

# Array of possible replies ( only endings )
replies = [
    " Rock beats scissors!",
    " Paper beats rock!",
    " Scissors beats paper!"
]

def round_result(winner, choice):
    # Determine the reply beginning by who won
    if winner == "player":
        reply_start = "You won!"
    else:
        reply_start = "You lost!"

    # Determine the reply ending by the hand played
    if choice == "rock":
        return f'{reply_start}{replies[0]}'
    elif choice == "paper":
        return f'{reply_start}{replies[1]}'
    else:
        return f'{reply_start}{replies[2]}'
    
def get_computer_choice():
    # Choose a random element from game_choices array
    return random.choice(game_choices)

def get_player_choice():
    # Ask a player to choose rock, paper or scissors
    return input("Please choose 'Rock', 'Paper' or 'Scissors' and see if you win!:\n")

def play_round(player_selection, computer_selection):
    # Assign and make the choices both for the player and the computer
    p1 = player_selection()
    p2 = computer_selection()

    if p1 == p2:
        # Tie = Replay the game
        print(f"Your choice: {p1}\nComputer choice: {p2}\nIt's a tie!")
        return play_round(player_selection, computer_selection)
    elif (p1 == "rock" and p2 == "scissors") or (p1 == "paper" and p2 == "rock") or (p1 == "scissors" and p2 == "paper"):
        print(f"Your choice: {p1}\nComputer choice: {p2}\n{round_result('player', p1)}")
        return "player"
    else:
        print(f"Your choice: {p1}\nComputer choice: {p2}\n{round_result('computer', p2)}")
        return "computer"
    
def game(player_selection, computer_selection):
    # Number of games won by each player
    player_won = 0
    computer_won = 0

    # 5 rounds total
    for _ in range(0, 5):
        if play_round(player_selection, computer_selection) == "player":
            player_won += 1
        else:
            computer_won += 1
        print(f'Player: {player_won}\nComputer: {computer_won}\n')
    if player_won > computer_won:
        print(f"Congratulations! You have won {player_won} vs {computer_won}")
    else:
        print(f"Sorry! You have lost {computer_won} vs {player_won}")


game(get_player_choice, get_computer_choice)