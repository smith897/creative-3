Currently, updating the toolbar so you can leave the queue doesn't work. It'll
take a lot of work, so maybe for now just make it so there's no leaving the queue
or anything like that, you can ask multiple questions, and on the TA side make
a button for removing a question from the queue.

Once I add that remove button on the TA side I think it'll be all good to turn in!


Notes/Questions for after the project:
-Should make the page check if they're in the queue, then set the
 GetHelpToolbar buttons accordingly
-Do we have a way to access student's pictures? Would it be best to just take
 them out?
-Currently getting out of the queue uses /leave, but when would we use that
 and when would we use /destroy? Should we just leave and let the back-end
 do the destroying when everyone's gone, and/or have a destroy command for
 the TA side?
-Doesn't currently show updates when someone else gets on or leaves the queue.
 You can use SocketIO to do real-time communication, but it's advanced.
