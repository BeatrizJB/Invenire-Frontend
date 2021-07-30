import React from "react";

function Home() {
  return (
    <>
      <section className="Home">
        <div>
          <h1>Invenire</h1>
        </div>
        <div className="Bodycard">
          <article>
            <p className="Link2Def">
              <a href="https://www.etymonline.com/word/inventory">
                <em>inventory (n.)</em>
              </a>
            </p>
            <p className="TextBox1">
              <em>
                early 15c., from Old French inventoire "detailed list of goods,
                a catalogue" (15c., Modern French inventaire), from Medieval
                Latin inventorium, alteration of Late Latin inventarium "list of
                what is found," from Latin inventus, past participle of invenire
                "to find, discover, ascertain".
              </em>
            </p>
            <p className="TextBox2">
              An app based on the concept of inventory creation, Invenire. If
              you have a storage unit, or a home with either an attic/basement,
              if you want to downsize or just keep track of your possessions,
              Invenire makes it easier. Create an inventory with infinite items,
              and access those items to give them more information if needed.
            </p>
          </article>
        </div>
        <footer>
          Created by <a href="https://github.com/BeatrizJB">BJB</a>
        </footer>
      </section>
    </>
  );
}

export default Home;
