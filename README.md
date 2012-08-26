insight_timeline
================

-----------------------------------------------------------------------------------------------------------------------------
These module is develop as a project of Google Summer of Code 2012.     
                Auther : Lali Sudaththa Devamanthri.    
                Date   : August 26, 2012

-----------------------------------------------------------------------------------------------------------------------------


INTRODUCTION
------------
Creating Event contents for Fedora groups and show them for users who member of relevant groups is the major aspect of the project.
This system is use in Fedora Insight [1] , Drupal7 web. To achieve that, modules were coded in this summer. 

DESCRIPTION
-----------

Creating Events ~
	By creating Event content type in Drupal7, we will be capable to create events.
	

Creating Groups ~
	By creating Group content type inDrupal7, we will be capable to create groups.
	og module needs to be install for do this.
	
Show them in TimelineJS ~
	By filtering nodes from database and publish it via TimelineJS. This is achieved through node_example module. 


DEPENDENCIES
------------
ctools. 
date.   
date_ical.      
entity. 
featurs.        
feeds.  
job_sheduler.   
og.     
views.  

Those Drupal 7 modules are need for get full functioning of this project


REFERENCES
----------
[1] https://fedoraproject.org/wiki/Fedora_Insight.      
[2] http://timeline.verite.co/
