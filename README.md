philwinfield.com
================

Static portfolio site, built with Jade.

Bootstrap
---------

    $ npm install

Development
-----------
A development server is provided to serve static assets.

    $ scripts/server

A watch script is useful to recompile individual Jade templates if they change.

    $ scripts/watch     # you'll need to restart this if you add a new file.

But for anything else, like changing a base or include, you'll need to manually recompile.

    $ scripts/compile

Deploy
------
This pretty much consists of zipping up `./root` to drop in staticloud.

    $ scripts/zip

