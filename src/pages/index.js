import React from 'react'
import Link from 'gatsby-link'

import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';

const IndexPage = () => (
  <div id="main">
    <header className="major container medium">
      <h2>We conduct experiments that
      <br />
      may or may not seriously
      <br />
      break the universe</h2>
      {/* <p>Tellus erat mauris ipsum fermentum<br />
      etiam vivamus nunc nibh morbi.</p> */}
    </header>

    <div className="box alt container">
      <section className="feature left">
        <a href="#" className="image icon fa-signal"><img src={pic1} alt="" /></a>
        <div className="content">
          <h3>The First Thing</h3>
          <p>Vitae natoque dictum etiam semper magnis enim feugiat amet curabitur tempor orci penatibus. Tellus erat mauris ipsum fermentum etiam vivamus eget. Nunc nibh morbi quis fusce lacus.</p>
        </div>
      </section>
      <section className="feature right">
        <a href="#" className="image icon fa-code"><img src={pic2} alt="" /></a>
        <div className="content">
          <h3>The Second Thing</h3>
          <p>Vitae natoque dictum etiam semper magnis enim feugiat amet curabitur tempor orci penatibus. Tellus erat mauris ipsum fermentum etiam vivamus eget. Nunc nibh morbi quis fusce lacus.</p>
        </div>
      </section>
      <section className="feature left">
        <a href="#" className="image icon fa-mobile"><img src={pic3} alt="" /></a>
        <div className="content">
          <h3>The Third Thing</h3>
          <p>Vitae natoque dictum etiam semper magnis enim feugiat amet curabitur tempor orci penatibus. Tellus erat mauris ipsum fermentum etiam vivamus eget. Nunc nibh morbi quis fusce lacus.</p>
        </div>
      </section>
    </div>

    {/* <div className="box container">
      <header>
        <h2>A lot of generic stuff</h2>
      </header>
      <section>
        <header>
          <h3>Paragraph</h3>
          <p>This is the subtitle for this particular heading</p>
        </header>
        <p>Phasellus nisl nisl, varius id <sup>porttitor sed pellentesque</sup> ac orci. Pellentesque
        habitant <strong>strong</strong> tristique <b>bold</b> et netus <i>italic</i> malesuada <em>emphasized</em> ac turpis egestas. Morbi
        leo suscipit ut. Praesent <sub>id turpis vitae</sub> turpis pretium ultricies. Vestibulum sit
        amet risus elit.</p>
      </section>
      <section>
        <header>
          <h3>Blockquote</h3>
        </header>
        <blockquote>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget.
        tempus euismod. Vestibulum ante ipsum primis in faucibus.</blockquote>
      </section>
      <section>
        <header>
          <h3>Divider</h3>
        </header>
        <p>Donec consectetur vestibulum dolor et pulvinar. Etiam vel felis enim, at viverra
        ligula. Ut porttitor sagittis lorem, quis eleifend nisi ornare vel. Praesent nec orci
        facilisis leo magna. Cras sit amet urna eros, id egestas urna. Quisque aliquam
        tempus euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
        posuere cubilia.</p>
        <hr />
        <p>Donec consectetur vestibulum dolor et pulvinar. Etiam vel felis enim, at viverra
        ligula. Ut porttitor sagittis lorem, quis eleifend nisi ornare vel. Praesent nec orci
        facilisis leo magna. Cras sit amet urna eros, id egestas urna. Quisque aliquam
        tempus euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
        posuere cubilia.</p>
      </section>
      <section>
        <header>
          <h3>Unordered List</h3>
        </header>
        <ul className="default">
          <li>Donec consectetur vestibulum dolor et pulvinar. Etiam vel felis enim, at viverra ligula. Ut porttitor sagittis lorem, quis eleifend nisi ornare vel.</li>
          <li>Donec consectetur vestibulum dolor et pulvinar. Etiam vel felis enim, at viverra ligula. Ut porttitor sagittis lorem, quis eleifend nisi ornare vel.</li>
          <li>Donec consectetur vestibulum dolor et pulvinar. Etiam vel felis enim, at viverra ligula. Ut porttitor sagittis lorem, quis eleifend nisi ornare vel.</li>
          <li>Donec consectetur vestibulum dolor et pulvinar. Etiam vel felis enim, at viverra ligula. Ut porttitor sagittis lorem, quis eleifend nisi ornare vel.</li>
        </ul>
      </section>
      <section>
        <header>
          <h3>Ordered List</h3>
        </header>
        <ol className="default">
          <li>Donec consectetur vestibulum dolor et pulvinar. Etiam vel felis enim, at viverra ligula. Ut porttitor sagittis lorem, quis eleifend nisi ornare vel.</li>
          <li>Donec consectetur vestibulum dolor et pulvinar. Etiam vel felis enim, at viverra ligula. Ut porttitor sagittis lorem, quis eleifend nisi ornare vel.</li>
          <li>Donec consectetur vestibulum dolor et pulvinar. Etiam vel felis enim, at viverra ligula. Ut porttitor sagittis lorem, quis eleifend nisi ornare vel.</li>
          <li>Donec consectetur vestibulum dolor et pulvinar. Etiam vel felis enim, at viverra ligula. Ut porttitor sagittis lorem, quis eleifend nisi ornare vel.</li>
        </ol>
      </section>
      <section>
        <header>
          <h3>Table</h3>
        </header>
        <div className="table-wrapper">
          <table className="default">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>45815</td>
                <td>Something</td>
                <td>Ut porttitor sagittis lorem, quis eleifend nisi ornare vel.</td>
                <td>29.99</td>
              </tr>
              <tr>
                <td>24524</td>
                <td>Nothing</td>
                <td>Ut porttitor sagittis lorem, quis eleifend nisi ornare vel.</td>
                <td>19.99</td>
              </tr>
              <tr>
                <td>45815</td>
                <td>Something</td>
                <td>Ut porttitor sagittis lorem, quis eleifend nisi ornare vel.</td>
                <td>29.99</td>
              </tr>
              <tr>
                <td>24524</td>
                <td>Nothing</td>
                <td>Ut porttitor sagittis lorem, quis eleifend nisi ornare vel.</td>
                <td>19.99</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="3"></td>
                <td>100.00</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </section>
      <section>
        <header>
          <h3>Form</h3>
        </header>
        <form method="post" action="#">
          <div className="row">
            <div className="col-6 col-12-mobilep">
              <label for="name">Name</label>
              <input className="text" type="text" name="name" id="name" value="" placeholder="John Doe" />
            </div>
            <div className="col-6 col-12-mobilep">
              <label for="email">Email</label>
              <input className="text" type="text" name="email" id="email" value="" placeholder="johndoe@domain.tld" />
            </div>
            <div className="col-12">
              <label for="subject">Subject</label>
              <input className="text" type="text" name="subject" id="subject" value="" placeholder="Enter your subject" />
            </div>
            <div className="col-12">
              <label for="subject">Message</label>
              <textarea name="message" id="message" placeholder="Enter your message" rows="6"></textarea>
            </div>
            <div className="col-12">
              <ul className="actions special">
                <li><input type="submit" value="Send" /></li>
                <li><input type="reset" value="Reset" className="alt" /></li>
              </ul>
            </div>
          </div>
        </form>
      </section>
    </div> */}

    <footer className="major container medium">
      <h3>Get shady with science</h3>
      <p>Vitae natoque dictum etiam semper magnis enim feugiat amet curabitur tempor orci penatibus. Tellus erat mauris ipsum fermentum etiam vivamus.</p>
      <ul className="actions special">
        <li><a href="#" className="button">Join our crew</a></li>
      </ul>
    </footer>
  </div>
)

export default IndexPage
