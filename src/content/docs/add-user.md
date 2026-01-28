```
# ssh into the server
ssh [server ip]

# add new admin
sudo adduser [username]
sudo usermod -aG sudo [username]

# confirm it works
id [username]

# add to AllowUsers setting for ssh access
sudo vim /etc/ssh/sshd_config
sudo systemctl reload ssh

# add their public ssh key
sudo su - [username]
mkdir -p ~/.ssh && chmod 700 ~/.ssh && touch ~/.ssh/authorized_keys && chmod 600 ~/.ssh/authorized_keys
vim ./.ssh/authorized_keys
exit

# optionally log out of the server
exit
```

