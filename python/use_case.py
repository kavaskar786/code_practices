from graphviz import Digraph

# Create a new directed graph
use_case_diagram = Digraph('G', filename='use_case_diagram', format='png')

# Add nodes for actors
use_case_diagram.node('A', 'Alumni', shape='actor')
use_case_diagram.node('T', 'Teacher', shape='actor')
use_case_diagram.node('S', 'Student', shape='actor')
use_case_diagram.node('Admin', 'Administrator', shape='actor')

# Add nodes for use cases
use_case_diagram.node('Reg', 'Register/Login')
use_case_diagram.node('Profile', 'Manage Profile')
use_case_diagram.node('Search', 'Search Directory')
use_case_diagram.node('Msg', 'Send Message')
use_case_diagram.node('Forum', 'Participate in Forum')
use_case_diagram.node('Event', 'Manage Events')
use_case_diagram.node('Job', 'Job Board')
use_case_diagram.node('Mentor', 'Mentorship Program')
use_case_diagram.node('News', 'Read News')
use_case_diagram.node('Upload', 'Upload Media')
use_case_diagram.node('Analytics', 'View Analytics')

# Define relationships (edges) between actors and use cases
use_case_diagram.edge('A', 'Reg')
use_case_diagram.edge('A', 'Profile')
use_case_diagram.edge('A', 'Search')
use_case_diagram.edge('A', 'Msg')
use_case_diagram.edge('A', 'Forum')
use_case_diagram.edge('A', 'Event')
use_case_diagram.edge('A', 'Job')
use_case_diagram.edge('A', 'Mentor')
use_case_diagram.edge('A', 'News')
use_case_diagram.edge('A', 'Upload')

use_case_diagram.edge('T', 'Reg')
use_case_diagram.edge('T', 'Profile')
use_case_diagram.edge('T', 'Search')
use_case_diagram.edge('T', 'Msg')
use_case_diagram.edge('T', 'Forum')
use_case_diagram.edge('T', 'Event')
use_case_diagram.edge('T', 'Mentor')
use_case_diagram.edge('T', 'News')
use_case_diagram.edge('T', 'Upload')

use_case_diagram.edge('S', 'Reg')
use_case_diagram.edge('S', 'Profile')
use_case_diagram.edge('S', 'Search')
use_case_diagram.edge('S', 'Msg')
use_case_diagram.edge('S', 'Forum')
use_case_diagram.edge('S', 'Event')
use_case_diagram.edge('S', 'Job')
use_case_diagram.edge('S', 'Mentor')
use_case_diagram.edge('S', 'News')
use_case_diagram.edge('S', 'Upload')

use_case_diagram.edge('Admin', 'Event')
use_case_diagram.edge('Admin', 'News')
use_case_diagram.edge('Admin', 'Upload')
use_case_diagram.edge('Admin', 'Analytics')

# Render and view the use case diagram
use_case_diagram.render('use_case_diagram')
use_case_diagram.view()
