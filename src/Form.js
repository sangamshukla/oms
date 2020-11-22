import './App.css';

function Nav() {
  return (

<div class="flex center">
             <form>
             <div class="">
             <div>
                       <input type="text" placeholder="Enter your name here" class="px-3 py-3 m-2 bg-purple-100 rounded-2xl focus:ring-blue-600" name="name" id="name"/>
            
            </div>
            <div>
                             <input type="textarea" placeholder="Enter your address" class="px-3 py-3 m-2 bg-purple-100 rounded-2xl focus:ring-blue-900" name="address" id="address"/>
            </div>
            <div>
                         <input type="textarea" placeholder="Enter your phone" class="px-3 py-3 m-2 bg-purple-100 rounded-2xl focus:ring-blue-900" name="phone" id="phone"/>
            </div>

            
             </div>
             </form>
     </div>


      );
}

export default Nav;

