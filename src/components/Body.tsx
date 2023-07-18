import img1 from "./../assets/images/photo1.png";
import dots from "./../assets/icons/6dots.svg";
import eat from "./../assets/icons/eat.svg";
import clock from "./../assets/icons/clock.svg";

const Body = () => {
  return (
    <div className="body">
      <h1 className="title">Classic Cheesecake Recipe</h1>
      <div className="row">
        <img className="dots col-1" src={dots} alt="" />
        <p className="col-10 text_title">
          Look no further for a creamy and ultra smooth classic cheesecake
          recipe! Paired with a buttery graham cracker crust, no one can deny
          its simple decadence. For the best results, bake in a water bath.
        </p>
      </div>
      <div className="row col-12">
        <img className="img_principal" src={img1} alt="" />
      </div>
      <div className="row contenedor">
        <div className="columna columna1">
          <div className="row">
            <div className="row">
              <h2 className="ingredients">Ingredients</h2>
            </div>
            <div>
              <label htmlFor="" className="graham">
                Graham Cracker Crust
              </label>
              <div className="row">
                <input
                  className="form-check-input col-1"
                  type="checkbox"
                ></input>
                <label className="col-11 label" htmlFor="">
                  1 and 1/2 cups (150g) <strong>graham cracker crumbs</strong>{" "}
                  (about 10 full sheet graham crackers)
                </label>
              </div>
              <div className="row">
                <input
                  className="form-check-input col-1"
                  type="checkbox"
                ></input>
                <label className="col-11 label" htmlFor="">
                  5 Tablespoons (70g) <strong>unsalted butter</strong> , melted
                </label>
              </div>
              <div className="row">
                <input
                  className="form-check-input col-1"
                  type="checkbox"
                ></input>
                <label className="col-11 label" htmlFor="">
                  1/4 cup (50g) <strong>granulated sugar</strong>
                </label>
              </div>
            </div>

            <div>
              <label htmlFor="" className="cheesecake">
                Cheesecake
              </label>
              <div className="row">
                <input
                  className="form-check-input col-1"
                  type="checkbox"
                ></input>
                <label className="col-11 label" htmlFor="">
                  four 8-ounce blocks (904g) full-fat{" "}
                  <strong>cream cheese</strong> , softened to room temperature
                </label>
              </div>
              <div className="row">
                <input
                  className="form-check-input col-1"
                  type="checkbox"
                ></input>
                <label className="col-11 label" htmlFor="">
                  1 cup (200g) <strong>granulated sugar</strong>
                </label>
              </div>
              <div className="row">
                <input
                  className="form-check-input col-1"
                  type="checkbox"
                ></input>
                <label className="col-11 label" htmlFor="">
                  1 cup (240g) full-fat <strong>sour cream</strong> , at room
                  temperature
                </label>
              </div>
              <div className="row">
                <input
                  className="form-check-input col-1"
                  type="checkbox"
                ></input>
                <label className="col-11 label" htmlFor="">
                  1 teaspoon <strong>pure vanilla extract</strong>
                </label>
              </div>
              <div className="row">
                <input
                  className="form-check-input col-1"
                  type="checkbox"
                ></input>
                <label className="col-11 label" htmlFor="">
                  2 teaspoons <strong>fresh lemon juice</strong> (optional, but
                  recommended)
                </label>
              </div>
              <div className="row">
                <input
                  className="form-check-input col-1"
                  type="checkbox"
                ></input>
                <label className="col-11 label" htmlFor="">
                  3 large <strong>eggs</strong> , at room temperature
                </label>
              </div>
              <div className="row">
                <input
                  className="form-check-input col-1"
                  type="checkbox"
                ></input>
                <label className="col-11 label" htmlFor="">
                  topping suggestions: salted caramel, lemon curd, strawberry
                  topping, chocolate ganache, red wine chocolate ganache, fresh
                  fruit, whipped cream, or raspberry sauce (recipe in notes)
                </label>
              </div>
            </div>
            <div className="row">
              <h2 className="instructions">Instructions</h2>
            </div>
            <div className="row row_instruction">
              <div className="number col-1">
                <label htmlFor="" className="col-12">
                  1
                </label>
              </div>
              <label htmlFor="" className="col-10">
                Adjust the oven rack to the lower-middle position and preheat
                oven to 350°F (177°C).
              </label>
            </div>
            <div className="row row_instruction">
              <div className="number col-1">
                <label htmlFor="" className="col-12">
                  2
                </label>
              </div>
              <label htmlFor="" className="col-10">
                <strong>Make the crust:</strong> Using a food processor, pulse
                the graham crackers into crumbs. Pour into a medium bowl and
                stir in sugar and melted butter until combined. (You can also
                pulse it all together in the food processor.) Mixture will be
                sandy. Press firmly into the bottom and slightly up the sides of
                a 9-inch or 10-inch springform pan. No need to grease the pan
                first. I use the bottom of a measuring cup to pack the crust
                down tightly. Pre-bake for 8 minutes. Remove from the oven and
                place the hot pan on a large piece of aluminum foil. The foil
                will wrap around the pan for the water bath in step 4. Allow
                crust to slightly cool as you prepare the filling.
              </label>
            </div>
            <div className="row row_instruction">
              <div className="number col-1">
                <label htmlFor="" className="col-12">
                  3
                </label>
              </div>
              <label htmlFor="" className="col-10">
                <strong>Make the filling:</strong> Using a handheld or stand
                mixer fitted with a paddle attachment, beat the cream cheese and
                granulated sugar together on medium-high speed in a large bowl
                until the mixture is smooth and creamy, about 2 minutes. Add the
                sour cream, vanilla extract, and lemon juice then beat until
                fully combined. On medium speed, add the eggs one at a time,
                beating after each addition until just blended. After the final
                egg is incorporated into the batter, stop mixing. To help
                prevent the cheesecake from deflating and cracking as it cools,
                avoid over-mixing the batter as best you can.
              </label>
            </div>
            <div className="row row_instruction">
              <div className="number col-1">
                <label htmlFor="" className="col-12">
                  4
                </label>
              </div>
              <label htmlFor="" className="col-10">
                <strong>Prepare the simple water bath (see note)</strong> Boil a
                pot of water. You need 1 inch of water in your roasting pan for
                the water bath, so make sure you boil enough. I use an entire
                kettle of hot water. As the water is heating up, wrap the
                aluminum foil around the springform pan. Pour the cheesecake
                batter on top of the crust. Use a rubber spatula or spoon to
                smooth it into an even layer. Place the pan inside of a large
                roasting pan. Carefully pour the hot water inside of the pan and
                place in the oven. (Or you can place the roasting pan in the
                oven first, then pour the hot water in. Whichever is easier for
                you.)
              </label>
            </div>
            <div className="row row_instruction">
              <div className="number col-1">
                <label htmlFor="" className="col-12">
                  5
                </label>
              </div>
              <label htmlFor="" className="col-10">
                Bake cheesecake for 55-70 minutes or until the center is almost
                set. When it’s done, the center of the cheesecake will slightly
                wobble if you gently shake the pan. Turn the oven off and open
                the oven door slightly. Let the cheesecake sit in the oven in
                the water bath as it cools down for 1 hour. Remove from the oven
                and water bath, then cool cheesecake completely at room
                temperature. Then refrigerate the cheesecake for at least 4
                hours or overnight.
              </label>
            </div>
            <div className="row row_instruction">
              <div className="number col-1">
                <label htmlFor="" className="col-12">
                  6
                </label>
              </div>
              <label htmlFor="" className="col-10">
                Use a knife to loosen the chilled cheesecake from the rim of the
                springform pan, then remove the rim. Using a clean sharp knife,
                cut into slices for serving. For neat slices, wipe the knife
                clean and dip into warm water between each slice.
              </label>
            </div>
            <div className="row row_instruction">
              <div className="number col-1">
                <label htmlFor="" className="col-12">
                  7
                </label>
              </div>
              <label htmlFor="" className="col-10">
                Serve cheesecake with desired toppings. Cover and store leftover
                cheesecake in the refrigerator for up to 5 days.
              </label>
            </div>
          </div>
          <div className="row">
            <label htmlFor="" className="source">
              Source: https://sallysbakingaddiction.com/classic-cheesecake/
            </label>
          </div>
        </div>
        <div className="yields columna columna2">
          <div className="row div_title_yield div_fork">
            <img src={eat} alt="" className="eat col-md-4 col-sm-1 col-xs-1 fork" />
            <div className="row col-md-8 col-sm-5 col-xs-5">
              <label htmlFor="" className="yield">
                YIELDS
              </label>
              <label htmlFor="" className="serving">
                12 servings
              </label>
            </div>
          </div>
          <div className="row small_card">
            <div className="row div_title_yield">
              <img src={clock} alt="" className="eat col-4" />
              <div className="row col-8">
                <label htmlFor="" className="yield">
                  PREP TIME
                </label>
                <label htmlFor="" className="serving2">
                  45 minutes
                </label>
              </div>
            </div>
            <div className="row div_title_yield">
              <img src={clock} alt="" className="eat col-4" />
              <div className="row col-8">
                <label htmlFor="" className="yield">
                  COOK TIME
                </label>
                <label htmlFor="" className="serving2">
                  1 hour
                </label>
              </div>
            </div>
            <div className="row div_title_yield">
              <img src={clock} alt="" className="eat col-4" />
              <div className="row col-8">
                <label htmlFor="" className="yield">
                  TOTALTIME
                </label>
                <label htmlFor="" className="serving2">
                  7,75 hour
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
