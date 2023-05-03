import React from 'react';
// import { Link } from 'react-router-dom';
import './Book-Slide.css';
import Flickity from 'react-flickity-component';
import StarRatings from 'react-star-ratings';

const BookSlide = () => {
    const flickityOptions = {
        // initialIndex: 2,
        autoPlay:3000,
        wrapAround:true,
        freeScroll:true,
        prevNextButtons:false,
        pageDots:false,
        // arrowShape:{ x0: 1, x1: 1, y1: 1, x2: 1, y2: 1, x3: 1 }
    }
  return (
    <div class="book-slide">
        <Flickity
        options={flickityOptions}
        >
     <div class="book-cell">
      <div class="book-img">
       <img src="https://images-na.ssl-images-amazon.com/images/I/81WcnNQ-TBL.jpg" alt="" class="book-photo"/>
      </div>
      <div class="book-content">
       <div class="book-title">BIG MAGIC</div>
       <div class="book-author">by Elizabeth Gilbert</div>
       <div class="rate">
       <StarRatings
          rating={5}
          starRatedColor='#d85d61'
          numberOfStars={5}
          name='rating'
          starDimension="15px"
        starSpacing="5px"
        />
        <span class="book-voters">1.987 voters</span>
       </div>
       <div class="book-sum">Readers of all ages and walks of life have drawn inspiration and empowerment from Elizabeth Gilbert’s books for years. </div>
       <div class="book-see">See The Book</div>
      </div>
     </div>
     <div class="book-cell">
      <div class="book-img">
       <img src="https://i.pinimg.com/originals/a8/b9/ff/a8b9ff74ed0f3efd97e09a7a0447f892.jpg" alt="" class="book-photo"/>
      </div>
      <div class="book-content">
       <div class="book-title">Ten Thousand Skies Above You</div>
       <div class="book-author">by Claudia Gray</div>
       <div class="rate">
       <StarRatings
          rating={5}
          starRatedColor="#458997"
          numberOfStars={5}
          name='rating'
          starDimension="15px"
        starSpacing="5px"
        />
        <span class="book-voters">1.987 voters</span>
       </div>
       <div class="book-sum">The hunt for each splinter of Paul's soul sends Marguerite racing through a war-torn San Francisco.</div>
       <div class="book-see book-blue">See The Book</div>
      </div>
     </div>
     {/* <div class="book-cell">
      <div class="book-img">
       <img src="https://www.abebooks.com/blog/wp-content/uploads/2016/08/10.jpg" alt="" class="book-photo"/>
      </div>
      <div class="book-content">
       <div class="book-title">A Tale For The Time Being</div>
       <div class="book-author">by Ruth Ozeki</div>
       <div class="rate">
        <fieldset class="rating purple">
         <input type="checkbox" id="star11" name="rating" value="5" />
         <label class="full" for="star11"></label>
         <input type="checkbox" id="star12" name="rating" value="4" />
         <label class="full" for="star12"></label>
         <input type="checkbox" id="star13" name="rating" value="3" />
         <label class="full" for="star13"></label>
         <input type="checkbox" id="star14" name="rating" value="2" />
         <label class="full" for="star14"></label>
         <input type="checkbox" id="star15" name="rating" value="1" />
         <label class="full" for="star15"></label>
        </fieldset>
        <span class="book-voters">1.987 voters</span>
       </div>
       <div class="book-sum">In Tokyo, sixteen-year-old Nao has decided there’s only one escape from her aching loneliness and her classmates’ bullying.</div>
       <div class="book-see book-pink">See The Book</div>
      </div>
     </div> */}
     <div class="book-cell">
      <div class="book-img">
       <img src="https://images-na.ssl-images-amazon.com/images/I/81af+MCATTL.jpg" alt="" class="book-photo"/>
      </div>
      <div class="book-content">
       <div class="book-title">The Great Gatsby</div>
       <div class="book-author">by F.Scott Fitzgerald</div>
       <div class="rate">
       <StarRatings
          rating={5}
          starRatedColor="#905587"
          numberOfStars={5}
          name='rating'
          starDimension="15px"
        starSpacing="5px"
        />
        <span class="book-voters">1.987 voters</span>
       </div>
       <div class="book-sum">The Great Gatsby, F. Scott Fitzgerald’s third book, stands as the supreme achievement of his career.</div>
       <div class="book-see book-yellow">See The Book</div>
      </div>
     </div>
     <div class="book-cell">
      <div class="book-img">
       <img src="https://images-na.ssl-images-amazon.com/images/I/81UWB7oUZ0L.jpg" alt="" class="book-photo"/>
      </div>
      <div class="book-content">
       <div class="book-title">After You</div>
       <div class="book-author">by Jojo Moyes</div>
       <div class="rate">
       <StarRatings
          rating={5}
          starRatedColor="#ffad58"
          numberOfStars={5}
          name='rating'
          starDimension="15px"
        starSpacing="5px"
        />
        <span class="book-voters">1.987 voters</span>
       </div>
       <div class="book-sum">Louisa Clark is no longer just an ordinary girl living an ordinary life. After the transformative six months spent.</div>
       <div class="book-see book-purple">See The Book</div>
      </div>
     </div>
    </Flickity>
   </div>
  );
}

export default BookSlide;
