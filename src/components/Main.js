import React from "react";
import "./Main.css";

const Main = () => {
  return (
    <div className="mainDiv">
      <div id="firstCol">
        <h2>Exxmon</h2>
        <div className="menuDiv">Menu</div>
        <div id="menu" className="subMenu">
          Home
        </div>
        <div className="subMenu">Community</div>
        <div className="subMenu">Discovery</div>
        <div className="subMenu">Comming soon</div>
        <div className="menuDiv">Social</div>
        <div className="subMenu">Friends</div>
        <div className="subMenu">Parties</div>
        <div className="subMenu">Media</div>
        <div className="menuDiv">General</div>
        <div className="subMenu">Setting</div>
        <div className="subMenu">Log Out</div>
      </div>
      <div id="secCol">
        <div>
          <span>TV Series</span>
          <span id="movie">Movies</span>
          <span>Animes</span>
        </div>
        <div className="jumanImg">
          <img
            src="https://ntvb.tmsimg.com/assets/p13499680_v_h10_ak.jpg?w=1280&h=720"
            alt="jumanji"
          />
        </div>
        <div className="artistLabel">
          <div>Best Artists</div>
          <div>Arrow Image</div>
        </div>
        <div className="artistImg">
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFA3WjzQ7NqYQ0mRY0Vju0hsCzHNEryMAggw&usqp=CAU"
              alt="jumanji"
            />
          </div>
          <div>
            <img
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgVEhIYGBgYGBgYGBoSGBgYGBkYGBgZGRgZGBgcIS4lHB4rIRgYJjgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QGBISGDQhGiE0NDQxNDQxNDQ0NDQ0NDQ0NDQ0NDE0MTQ0NDQ0NDQ0NDE0NDQ0NDQ0NDE/MTE/NDE/NP/AABEIAKgBLAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAADAAECBAUGB//EAD4QAAIBAgQDBgQEAwgBBQAAAAECAAMRBBIhMQVBUSJhcYGRoQYTsfAyQlLRFHLBBxVigqOy4fGiIyQzQ5L/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAeEQEBAQEAAgMBAQAAAAAAAAAAARECEiEDMUFRIv/aAAwDAQACEQMRAD8A4URzIrHMmOYiINoSRcRiKzQcMyyFoHhLCpIKJNYCwZY8iI4hqMIrDYTCmo6ou5O/QczBTpfhbCaNUPM5R4DU/wBPSLq5F887W1gqK00CILAepPU9TLXzABeV3a0q4ippJi08ZxK2nOc/isexOsfF1rX5n73mPUcneFq+eWtRq35jyki/SY1OrDCuY5ReWkKgG4v4yYxA6ADu+9pnlzvf78ZJag5ZvvpC08Xv4ocxmHLMch8u+XaeOb/u+0x1W+yk+P8AyYVLjQgDwk05HS4XiNiCdO8G/lOk4bxjlffxsZ57Qc3218R5bzawNSxG9+dif+j6yTejcJrWZznYh8pCk3UEXuV6XuO7s+Mxv7QeCipT/iKY7SAB/wDEnU94+hkuGVtAfD7vN1SHRkfUFSCDzDCxHfoY99J6mvEXSBenNTHYU03dG3RmX0NryqyRWpjNqU5VdJqPTlWpTi1TNcRlciWaiSuyxylYv4XF2m7g8X3zklNjLuGxVucLNJ2aYi4gapvMrD4rvlpa95M5w7RMsMIAPCZ5VS5RYjEDFNYyp4zRxGaMoEwgyIRoMwWQkxICTECSEkDIiSgSQM9N4PwzJhk6lAx8X7VveeZ01uQOpA9Tae4vQAGUDQCwt3AD+ky7rb4p9uMrCwMysQ9gZ0OPQXsO/wBe/wBLzm8TTP39+EXNOxiYglj3QIwt+f0mlUpt005QPzbbKPOUqIUeHH9XpLf92tbl7j6QC4vqfa0OOJZbWF+W+X3Eco9ovw1xzHgbmRTC2OpudrEW9JeOODC+UeBJt6yDY1N7i53Gw994eh7KlhDb8IFuh09+cu08KTuw+p9QJT/vNRs1/AD0gzxcX353sTcDwvC0ZWqcOvMb90JRpC4tf6nztMtOKLzP7S1S4rTOjH0NpAx1XBSbkE+37zdRjYgGxtp4jl7TneD45CwKsCe8695vznT4xQMrjYi5HjoRJqo89+Kl/wDcFxs6q2nW2U/7ZimdD8XpaogH6D/uJ/rOdJhPpn+0zLAVEli8iwgbOqU5VenNV0laokcNmMkiNJbenAMkcpWC0K9pfp4iZFoVHjDdpV5ZzzFoVNZfSppFUscR4wjzZhSjNHkWgEGkJJpGCjCTEgJMQNIRxIiOJJDYZrOp6Mp9CJ7ziG0vy+9e6eBT3GlXz4ZH/VTRj5qDI6bfH+sTiuFYdsDS5ufL+kwMSFUXbYbdTNxsYzgKB+YjXaxtc+GpnE/FuKbNkQm3X785PP2uxR4lxcE2Gkx6nErTNxDi+5Y+3rzlYmbTlLTbich/eBPPTkJnRxFkVK114gw2MZ8YSSbmZ9I3Muthdbjbvk4ek+LNpXbHNyjYlbSqZXMgtWf45+snSxj3lQQ7YZwgcowRjZWINj4GP1EfbouGcVdCG3HOxnq/wx8QriaZRiA6Wy3OuvK08FoVmQ3UkffMc51vwbxa2IRr5SGUuBsyg6+VjqJHXPrTjuPjFLujdU+hnNvTnXfFdIslNwQwDOl12IbtJ7BvSc62FcLnNNgp/MQbesx0s/0zCto8sOkA6RymgVgnSGjERhTenAPTmiyQLpGGW9OBImhUpyu9OOUg0eXEq6SnlhBAsMI8YR5swKMRHjGACaRtJtIQMhJSIjxYaQkgJATW+HKqJXD1EzhEdgoOW7KhK62MVuTT5nlZIq1sFURQz03VTsWUges9L4VxFTgqSZrsaK+inIfcWnK1eNO4LUydu3Tc5wB+ofqXr0h+B4n5hZVRUCIwAGwzuD9bmZ3ryjovxdcXK06VTISxubG9zawvex8hp6TlfjfFqEXJu2g6ga3J5gm3OXfibFumZBYi+veNwPD9px+MxTOr5xdro4J5ZcwPs5P+WHM9wfjNwmEaoSF0AF2ZtFUa6seWxtHxGGCMUqFgw3ACn3vB/PZQyq5CuBmA2Nr2v6n1g3Yk3Ykk7km59TNvep9YjNPgFFHqZai5hlNhmya+P3vKWJo5MovfMivt+oXtHwLhXUsSADqVFzbw5w69y4fP2Pj8MqVGVKgYA6dRqQQe8e81sBWumlNzp+K2nlKWJdcRWDKllCgG+7Wv2iOV7+063hCtbaRvqb9nY4zjDdoDKV7mFpUqHQAZbb6DtDlZjbf952fxJgs67ajVfLlOWwdACoARoVf8Wuvy2OveDaPmzCsUCZ1/BcSKuHNLLmcKVCsbrcC69nroNe+ckEtzBlzB4+pTRlRsuY7gDMNLGzbjSHc2CXKp5dIbAVctRD/iAPgTY+xjO0u8EwDVHzW7KaknbN+UePPyjt9E9j4Japg2LLmIF8veguD42FvOYNb4gd2CKRlYHMDqMtjymn8E40AlHBFtd9D126gGYf8AAKlQ5d0d6LDnpfI3mFI9Jy9em3El3f4ZhBMJYMC4hGILrIWk2MQMuJ1EpBukPIsIDVNkgHSXmWCdIzUHSRyy46QWSMKQjyIkhNnOeRMlImAgbSMk0heCklElljoJLLFowMy7wk/+qvg/+xpTaH4bXCVUc7Bhf+U6N7EyepvNPi51KtNUNOmrr+Nnut/0oLEHuJYg+E674ToIWrMm2Wm687I5LZfEMCp8Jx/xFSNMU15KhHnncE+06f8AslrkvXVjp8tSBzvmO055PUej8n+t6VPi2kDUZhsT7ka/UzlnULyncfFtGztYjTpfTU7+Z9vCcDiX1M15vpzYzcVhwNV26dPCVWEvV2gFp33mk6GFi6pOSx2RB5hbQa0zz9IchRsIfh1BnbQaDcx+XoSNPhGC26nedjg6AC6TmaXYHfNKjxkAATI7GlxDD3F5yOMwmVrjY+ovofqZ1R4kHWY+JwzOGZfaKX2rPTmjwk7o3kf3ld8My6EWmph8V2rHQ7EHuM0GohxczTyqPGMPC4MEguTbov7zpsJWRFCqAFHKZL0sp01HjJq5H9JNujHW8DxYSoH+nsLc9YPG1CvEq6X7Llb/AMxRHU//ALmVwTEdsa2/rvobjxmrVwrPja1Wxsppksdr/LT01mXX204uaJVWxPiZXdpcxhGd7bZjb1lGpCRh5AO0ZWjNEsuFR1kisgsKBFRAWSRtLWWDdIjVmpwJpy4RI5ZQc+I4kbxAzocupyDGSvIMYHA2MjJNBxLW6UmRI0hpCkSFK1SQElWgryon9dNxTCvXw9B0GYshQ21OdGJIPjmv6yx/ZvVKYk0iCC4Nj0yqwsR4uD/ljfBmKdiKa7qSSvVHFiw70bX/ADGT4LWVMfSFrvnALrsQTvaYWZbHZz1vLf8AjiyoXYaKVTS+ozAnS2lrt5TzfHU/Ykad2l/Yz134tw4NBywuBc2HIDtXtzOltOs8qxFIqxQ9SvmGufqY4ljskGyS7V69/wBBzlUxgB1tNPAY5adIAWBuxY8ySdPa0p/KvIY2mRaw5cpX2Ni+vEFe4za8rwBc33mU3hEK7dfWHh/DnUbS4zINWlrBcct2QZztNGc9ZsYPh2oY8uUV5kHkFjmvUZ1Fgxv52195ew2IuLc5dfABl2gP4SwtsYJ1Gob784BAb2J8Oul4R82zcjp/wZE2Nr+XPWI2hwIH5gA5lRztfMCPr7zsaeKRKz0kezMlnVxcFfli1jfe2UzkuCPZ/wAN9ibDcXsR9D5Te4nUopVqP/8AaERR0OZLC45ECRZ7Lc2oObwDrKyYqHFQGX4uPyugOkiJYYXg8sMXOk0MMsEqwgFoq0lPFeNmkgJKkGWDywzCQjDk44MlaNadDk0s0YmIiICByoGNaFyxZYK0WntCQSQkWH5A1lgQssMIwSETeheG4p6NRKlP8SEHxHMHuIuPOdBicTRDpXw5sSQXVvxKQbkf8znVWEEnrnV8fJ4vXuPWZGJBYOAezv2tAf6+QnlvFqeU2vcqo165u0DrqSQw152npKVjVw1Bj+egqMR1NkIt1zL5TgOLILk21OQMdr5Acvf+cg+Ezn26dc9XWwPifc3gUpaXMu1KOYab3tbxOn0+7x8TSyqLW21577fSMaq0hLAw+bU7DrKofUC/SNxHGX7CaAb25mUWWoYhkGgGb6St8umd7r4ayu9S0j84dJWU8jSw1dEPZp3/AJjN7AY2k+l8jdDsfOcaa3dJLWhZTyPQWOWV2cXuJz3D+LEDJUNxyPMS2mLubAnuymRSxZxCc/sSuSPDn0F5eIzpfppM9RqNNDrEbX4MnbUjw5+P7iA+LqmXFNb9FO/j8tZLhLj5i7jUa38tZX+MXvin0tZKY/00hz9svk+lSlipeo4qYIh6dUia457HRpXhleYdLEy5TxMmxONdBCgSjQr3l1GkWNeaiyRl0hGaNeS2RcwWaTaBJhCrnIrRgY950OQiIgsUcQBwsVpIRGARAkhIyQgCtGjmNAHvHEjHEA9I+FXz4AWJzUndBlNjqM4H/n7TnOP4YE3XXWz9VLMQD4CxHlLfwDjwrvQf8NRQRf8AUtw1u8qf/GNx+nYGy9nNmN9Li1zfvzF/C488OvXTs4u8xzGGu1v5idOuuXXvOUDwjcafsK3Ute3Oxyg2+95cwdMaop1YPy1Jt2fcg+Up8bQZdD2dMo10GhO/eD6Rrc0ztfSJabsdR5y0q90kxttK3AHT4ev5ifpLAwVHp6kylUrN1gTWaPabbpUKK/kU+OsNUw9EjZR4bznc5POWsMOphR6XG4Uh/CzQSYQodzL9FwI9Sop6jv8A6Wk6VXOGVxYq3PmBsekr10AbS+5t9RbugqLi+h07x0IOvpFVYfW3d3xGt4R+2NPvyljimB+dWd0rIzEgZS1m7Khba7nSZlLEBSzHZQT6WP7TAXEOTe+pN79+8rme9Z9TY3cTgnpnK6lT3yswnf4nC/xPDUxBHbQIzHmVfMje6KfMzgsSuWVKy8Qg9oWniJRZ5NHlF4t/CVprUKk57BNNrDGZdLnOL5kZEGIvIWTtA5oOtVgfmxyFWMI8jHm7mSjiQEkIAQRGIRGCUY94xMV4ArxXijQBwZKQEIiFjYQA+Brsjq6fiUgj+o8CLjznW42stZS6tuq+RuwYE330sf5u4TgOLcRCD5dM9r87dO4d8sfBWPb5hoEgq+Z1DAE51FzYnqoIkd87NdXxS8z21EZkfLbVcmg5BW1PoR5Ew3G8PYX3sW7hdjr47b9JdbCAANTa+R1Bve5AyLl12Fhz1vIYgXQga635X3Fzpytr5zONHF4hrHTnrcwJaW8cnbJC2HIcvAe0p5NZZ6i8A0uhAfxD0hlRByHnHBrMVT0h6Zl9aijkIYhTtYQo1WRjaEA6nwvJ5QIMrJLVimLX1Ht0jVDcXvp++pEg1UW9j3ys1W5sPOIK+PxBtl66nw5fT2lFBLvEvxj+Ue14bhmA+ZUVbaXDN/KCLjz0HnNZMiOq9X+E6N8MlF/wOiU2Xnewe/8AqP5rOA+IMG1Ko9Nt1JF+o5HzFjO2+FMcDVVL37JdQOYS/at3s7MPKT+NeBNUw/8AEqLtTJD23yX1v/KfY90jf9F+PJCNYWmISpTjIJQaGEmzhnmHhjNjDmTQ01MFWa0StAYh5KlLEVZU/iO+LFvM/wCZKkStXjyIkhNHOeOJG8cQAgiaMsRgDRwZEmKASvGjRoJSvJY7EfJpaDtvseg5fv5jpJ4SlncL4k+AFz9Jk/EWILVmW+idnuJH4ve8Gvx87WUxvvDYLENTdXU2KsD+/teBAkiRaDod1Q41rrs24Ymxlz5oa7ZhblYbagkdQDt5zhFqmwIP/Yl3D8SI5+uxmd5/h60eK4fKwN7qbWPgq3v33Myaml9Ok0v7xVlyv4jpvKWLANyNREao1SQasYzCQMoYkKhhkxBlYGNmjwNBK8dq/WZ5qWg3qEw8SWcRir7SWF01MprDI/MnQfekeYQmMuWFgSSABbc9w9ZtKv8AD08l7u4u53sD+UeVx4Zv1CAw7CmFZ1GcklFO6i1szdPD7ADWLEkk37+bcz990f4jq66f4S4hkxAd2uSLN4jVFHdcC/W09FweJIVSe0rizr+pWGunnaeP8PqWdAOZym/+LS/30nplLFZAvReyRt3EjpIs9lrznjmB+RXqUv0OQO9d1PoRM4Cdb/aBSvUp1xqHQKxt+dNPXLlnJrHDWKAmphjMylL9B4WBpptKuJhUeAxD3k4NY+LaUJfxizPtKgXwZIRRSnOUcRRQAgiYxRQAZMV4ooA940UUEtLgf/yE9F9s639rzkMYSaj33zte/W5iihHR8QyV0C2K3lJjFFG0g2HbS3fHaKKIImTFVhziiiNFqkiXiigaOeMWiijBo4iigQlNC2gH7DxMsLVVNV7T/qP4V/lHM98UUZB52Y3JNzuTLatoNLfYiigirGFfK6te1iCCet9D5TfxvGMpazaNr4E7+e8UURBYLiXzyaFY2R9A2+R/yMO6+h7iZmYvAVKLlKtNkYb3GncQeYPWKKTftURSWEqWiigFlK8d3iigFOvKXy4ooB//2Q=="
              alt="jumanji"
            />
          </div>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFA3WjzQ7NqYQ0mRY0Vju0hsCzHNEryMAggw&usqp=CAU"
              alt="jumanji"
            />
          </div>
         
          <div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFA3WjzQ7NqYQ0mRY0Vju0hsCzHNEryMAggw&usqp=CAU"
            alt="jumanji"
          />
          </div>
        </div>
        <div className="artistLabel">
          <div>Continue Watching</div>
          <div>Arrow Image</div>
        </div>
      </div>
      <div id="thirdCol">
        <div>
          <input type="text" id="name" name="name" />
        </div>
      </div>
    </div>
  );
};

export default Main;
