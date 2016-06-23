function wwToHtml() {
  this.getPlayerVoteFormContent = function(voteDescription, voteType) {
    var livingPlayers = Game.getLivingPlayers()

    // this text will still need to be put into a form element
    // and undecided on whether ill put the submit button here or in the
    // function that actually makes it a form

    var formContent = "<h5>" + voteDescription + "</h5><br>";
    formContent += '<select name="' + voteType + '">';
    for (var i = 0; i < livingPlayers.length; i++) {
        var player = livingPlayers[i].name;
        formContent += 'option value="' + player + '">' + player + '</option>';
    }
    formContent += '</select>';

    return formContent;
  }

  this.getDeathNotification = function(deadPlayer) {
    var notification = "<h3>" + deadPlayer.name + " has been killed!</h3><br>";
    if (deadPlayer.role === "Werewolf") {
      notification += "<p>Who was a Bloodthirsty Werewolf!</p>";
    } else {
      notification += "<p>Who was a humble villager...</p>"
    }
  }
}
