# AFK Farmbot

### very very very simple minecraft bot that keeps chunks loaded and has a command to rejoin so players can sleep.

## RUN
execute run.bat/.sh
## Config
Put the config in a .env file

```.env

#Account and Host
HOST="example.net"
PORT=25565
USERNAME="Steve"


#Prints the bots help
HELPCOMMAND=".afkhelp"
#The bot will leave and rejoin so the night can be skipped.
SLEEPCOMMAND=""
#The bot will print some simple stats about the world.
STATSCOMMAND=""
#If true the bot will check if its night and announce it in chat
NIGHTCHECK=False
#OTHER
GOODBYEMESSAGE="" #If set the bot will say this if a players leaves ( <player_name> <Goodbye_msg> )
JOINMESSAGE="" # REPLACES THE DEFAULT JOIN MESSAGE
```
