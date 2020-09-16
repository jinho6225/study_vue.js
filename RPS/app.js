new Vue({
    el: '#app',
    data: {
        choice: null,
        comChoice: null,
        count: 3,
        winner: null,
        lifeOfMe: 3,
        lifeOfCom: 3,
        isSelectable: true,
        logs: []
    },
    watch : {
        count: function(newVal) {
            if (newVal === 0) {
                let number = Math.random()
                if (number < 0.33) {
                    this.comChoice = "scissor"
                } else if (number < 0.66) {
                    this.comChoice = "rock"
                } else {
                    this.comChoice = "paper"
                }
                //winner
                if (this.choice === this.comChoice) this.winner = 'no one'
                else if (this.choice === 'rock' && this.comChoice === 'scissor') this.winner = 'me'
                else if (this.choice === 'scissor' && this.comChoice === 'paper') this.winner = 'me'
                else if (this.choice === 'paper' && this.comChoice === 'rock') this.winner = 'me'
                else if (this.comChoice === 'rock' && this.choice === 'scissor') this.winner = 'com'
                else if (this.comChoice === 'scissor' && this.choice === 'paper') this.winner = 'com'
                else if (this.comChoice === 'paper' && this.choice === 'rock') this.winner = 'com'
                else this.winner = 'error'
    
                if (this.winner === 'me') {
                    this.lifeOfCom--;
                } else if (this.winner === 'com') {
                    this.lifeOfMe--;
                }
                this.count = 3
                this.isSelectable = true

                let log = {
                    messege: `You: ${this.choice}, Com: ${this.comChoice}`,
                    winner: this.winner
                }
                this.logs.unshift(log)
            }
        },
        lifeOfMe: function(newVal) {
            if (newVal === 0) {
                setTimeout(() => {
                    confirm("you lost")
                    this.lifeOfCom = 3
                    this.lifeOfMe = 3
                    this.choice = null
                    this.comChoice = null
                    this.winner = null
                    this.logs = []
                }, 1000)
            }
        },
        lifeOfCom: function(newVal) {
            if (newVal === 0) {
                setTimeout(() => {
                    confirm("you won!")
                    this.lifeOfCom = 3
                    this.lifeOfMe = 3
                    this.choice = null
                    this.comChoice = null
                    this.winner = null
                    this.logs = []
                }, 1000)
            }
        }
    },
    methods: {
        startGame: function() {
            if (!this.choice) {
                this.isSelectable = true
                alert('please select rock or paper or scissor')
            } else {
                this.isSelectable = false
                let countDown = setInterval(() => {
                    this.count--;
                    if (this.count === 0) {
                        clearInterval(countDown)
                    }
                }, 1000)
            }
        }
    }
})