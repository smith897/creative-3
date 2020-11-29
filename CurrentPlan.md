Working! API is almost done, but you currently can't leave the queue, and
updating it requires a refresh.

Just made it so the Student.vue page has the isHelpedByMe class if you're the TA
helping them. Give it some good CSS, and make it so when you click help again
you stop helping them (might need another API call? Not do in this project?)

Then fix the problems below, add some dummy data (since you can only add one
  question to the queue), and done?


Ask a ta
-How to update the page? Currently you have to refresh it. How to update when
 someone else gets on the queue, should it check for updates every 5 seconds?
 (And whenever you make a change/an API call?) How could it do that?
-/sessions/leave.php doesn't work, the findByIdAndRemove doesn't work, wrong kind
 of ID being passed in? I pass in the ID attribute I made, but need a different
 kind? How do I get it?


Notes/Questions for after the project:
-Should make the page check if they're in the queue, then set the
 GetHelpToolbar buttons accordingly
-Do we have a way to access student's pictures? Would it be best to just take
 them out?
-Currently getting out of the queue uses /leave, but when would we use that
 and when would we use /destroy? Should we just leave and let the back-end
 do the destroying when everyone's gone, and/or have a destroy command for
 the TA side?
