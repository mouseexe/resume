// main-page.jsx
// created by Jesse Jurman

var React = require('react');
var Title = require('./title');
var SingleRow = require('./single-row');
var DoubleRow = require('./double-row');
var DetailBlock = require('./detail-block');
var CoopRow = require('./coop-row');


// The main application
var MainPage = React.createClass({
  render: function() {
    return (
      <div className="container">

        <Title id="title" title="Jesse Jurman"/>

        <DoubleRow id="info">
          <div className="left-align info">
            Rochester, New York 14617<br />
            jrjurman.com
          </div>
          <div className="right-align info">
            (585) 743-0393<br />
            jrj2703@rit.edu
          </div>
        </DoubleRow>

        <SingleRow id="profile" title="Profile">
          Software Engineer interested in software design,
          front-end development, and process / product management.<br />
          Active member, project lead, secretary, and mentor in
          RIT’s Society of Software Engineers. <br />
        </SingleRow>

        <DoubleRow id="education" title="Education">
          <DetailBlock title="Rochester Institute of Technology">
            Bachelor’s Degree in Software Engineering <br />
            Current GPA: 3.220 (on a 4­point scale)
          </DetailBlock>
          <DetailBlock title="">
            Graduation in May 2016 <br />
            Dean’s List on Fall (2011), Fall (2012), Spring (2014)
          </DetailBlock>
        </DoubleRow>

        <DoubleRow id="strengths" title="Strengths">
          <DetailBlock title="Software Engineering">
            Mathematical Models of Software,
            Engineering of Software Subsystems,
            Process and Project Management,
            Agile Process Methodologies
          </DetailBlock>
          <DetailBlock title="Imaging Science">
            Imaging Science Fundamentals,
            Computer Vision,
            Vision and Psychophysics,
            Linear and Fourier Methods for Imaging,
            Digital Image Processing
          </DetailBlock>
        </DoubleRow>

        <SingleRow id="coop" title="Co-op">
          <CoopRow title="Hudl" date="May 2015 – August 2015"
                role="Software Engineering Co-op – Developer for Hudl Combine">
            <div>
              Developed internal web tools to preview and better understand
              user entries in the iOS Application. Participated in testing,
              UI design and sketches, and process review.
            </div>
            <div>
              Javascript <br />
              ASP.NET MVC 5 <br />
              Git + Github + Jira
            </div>
          </CoopRow>

          <CoopRow title="Constant Contact" date="May 2014 – August 2014"
          role="Software Engineering Co-op – Developer for Campaign Automation">
            <div>
              Development for a rich web application, including architectural
              design, front-end development, integration with internal APIs,
              and continuous testing of web-components.
            </div>
            <div>
              Javascript + Jasmine <br />
              Backbone + Marionette <br />
              Git + Github + Jira
            </div>
          </CoopRow>

          <CoopRow title="Interactive Intelligence" date="May 2013 – December 2013"
                  role="Testing Automation Co-op – Testing Automation Engineer">
            <div>
              Automated testing of desktop software including telephone systems,
              scripts, virtual machines, and internal and open-source tools.
            </div>
            <div>
              JScript + Testcomplete <br />
              Hyper-V, Perforce + Jira
            </div>
          </CoopRow>

        </SingleRow>

        <SingleRow id="projects" title="Projects and Research">

        <CoopRow title="Pianola" date="March 2015 - May 2015"
                role="Developer, Researcher">
          <div>
          A project to build an interactive piano teaching tool. Focused on
          both screen and print usage, usability, and researching into the
          field of music and jazz theory.
          </div>
          <div>
            Javascript <br />
            React.js + Fluxxor <br />
            Git + Github
          </div>
        </CoopRow>

          <CoopRow title="ASLe16" date="March 2014 - May 2014"
                  role="Developer, Researcher">
            <div>
            Worked on a team of three people to build a 3D figure to display
            unique ASL signs from a small encoding language. Project involved
            writing a research paper detailing implications and possible future
            work.
            </div>
            <div>
              Python + Tkinter <br />
              Blender + ImageMagic <br />
              Git + Github
            </div>
          </CoopRow>

          <CoopRow title="Volumetric Display" date="September 2013 – May 2013"
                  role="Project Manager, Research Lead, Software Team Lead">
            <div>
            A research project based on a university paper. Worked with
             both Software Engineering and Imaging Science students. <br />
            WINNER OF THE PAYCHEX SPONSER AWARD FOR MOST INNOVATIVE
            PROJECT AT IMAGINE RIT
            </div>
            <div>
              Python + Blender <br />
              DLP and Motor Hardware <br />
              Git + Github
            </div>
          </CoopRow>
        </SingleRow>



      </div>
    );
  }
});

module.exports = MainPage;
