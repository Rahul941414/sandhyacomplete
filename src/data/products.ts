export type Product = { id: number; name: string; price: number; image: string; category: 'biryani' | 'curries' | 'snacks' | 'breads' | 'desserts' | 'beverages'; description: string; };
export const products: Product[] = [
  {
    "id": 1,
    "name": "Hyderabadi Biryani",
    "price": 229,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnSAFpoQta8KtfGYjFwF-dbihuYvYt_SXDzw&s",
    "category": "biryani",
    "description": "Freshly prepared Hyderabadi Biryani from Sandhya Restaurant kitchen."
  },
  {
    "id": 2,
    "name": "Lucknowi Biryani",
    "price": 199,
    "image": "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=1200&auto=format&fit=crop",
    "category": "biryani",
    "description": "Freshly prepared Lucknowi Biryani from Sandhya Restaurant kitchen."
  },
  {
    "id": 3,
    "name": "Veg Dum Biryani",
    "price": 199,
    "image": "https://www.indianhealthyrecipes.com/wp-content/uploads/2013/03/hyderabadi-vegetable-dum-biryani-recipe.jpg",
    "category": "biryani",
    "description": "Freshly prepared Veg Dum Biryani from Sandhya Restaurant kitchen."
  },
  {
    "id": 4,
    "name": "Chicken Biryani",
    "price": 79,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv-mW5pElUpoE8VmiYxI7L5ox4CnwLKhEkeA&s",
    "category": "biryani",
    "description": "Freshly prepared Chicken Biryani from Sandhya Restaurant kitchen."
  },
  {
    "id": 5,
    "name": "Mutton Biryani",
    "price": 299,
    "image": "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=1200&auto=format&fit=crop",
    "category": "biryani",
    "description": "Freshly prepared Mutton Biryani from Sandhya Restaurant kitchen."
  },
  {
    "id": 6,
    "name": "Paneer Butter Masala",
    "price": 299,
    "image": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSExMWFhUXGB8aFxgYGBgdGhoaGBgeGxgXGB4eHyggGBolHRgYITEiJykrLi8uGh8zODMtNygtLisBCgoKDg0OGxAQGy8mICUvLS0tLy0tLS8tLS8tLS0tLS0tLy0tLS0tLS0tLS0vLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAQIDBAYHAAj/xABHEAABAwIFAQUECAMFBgYDAAABAgMRACEEBRIxQVEGEyJhcTKBkaEHFEJSscHR8CNicjNDguHxFSQ0U5Kic7KztMLTNUSD/8QAGwEAAgMBAQEAAAAAAAAAAAAAAwQBAgUABgf/xAA5EQABBAAEAgkDAwQCAQUAAAABAAIDEQQSITFBUQUTImFxgZGx8DKh0RTB4SNCUvEVM2IGcoKi0v/aAAwDAQACEQMRAD8A6I73S2tYUhTYXuuCkaFQT0SRBiNiBQGkEWFa6NINnGNP1hthhOpYgOXshom8X3tdXlG5FUee0AFwvLatKyVhTQSbJQrYEi4tc7k6ryelQWsruV8zr709toNQ0kK0KJJJMgK3CU7QLG3n61NEGhsusHtcUzD5ypOGbU633alKI0ADodNhO8bb3qzXHKL3VHNGbTZYHNW33HDiHk6CG7JJhUJUoglJhSQYtI/OjRtPFVeW1ouUYh2XFf1GnQ60vloJUmrgoZCkTVlUqUVKGVKlE0QKhNJSzUFq4PUZw9RlCt1i99XqC2l3WLycOao0hwDhspL6Xvq9XACjrE9OHq2VVMikDNWDSq509LdTRVC5SJRUKpKelNSqkpwqwaoSxV1CSK5cvVBXJZrlySpUpKhSvV1Ll3TKkPFCkFpTYLilDVBhK7yDJGoLm3pXm2lxGopb9UUzMcUjDITpbKlL9p3SYA5WtUdL36VVzg0UBvxV2tzcfJX+9KUfZCtd5MDQFBKlm8SRJAqbofNl1Wh+KdhSm/4idbiYOkmVSmybQEWmZGxN71F1orBt6qs6pUuuJhTyvDh2VriBskabaCTMxewvepBF76oZI2WT7TuhrBBKloU6gFC9MkhZdcURJuYB0k05GNkF+pXGguTNFCkq00aK1AcrKBREEqZKau0cUMlTpTV0MlSpFWDUMp4RV6Ci05KAPslfknc/LagzODGZiaUttxpRCx9kp6b7Dc8xA5JpeN1DKRp5H2/ZEdrq02vIVqPoBPwjccWqYQGlQ80FIlvpemxrwQi5KpurUoDl4JrqU2l011BRaUCuoKEoFSoXq5SkJrlwTYqFZe1VyikkVym0s1ChenyrrXUu25R2mU4+tqCtOtaQQkDQEdYsUTad5I348wyUk0V6Z8VCwiWaYVTqk7hBlLqCfCUQYtsudrdb7WI4WVVhoJzxZDgaj+KtPh1GdQTcpid4ngc7xUU2+9cMwF8E51BbTDZsJMKJIMyYkzp9amiNiq2DqVzxzNBhcWjE6VKbknSkW7xUpOm4Gq4pDDZjKHVxPklww3ayf0kZyFhKUgpKvEoEgmVXuQBxfaxJrcaNNfnz9lNarAJFXCklWmaK1AcriKIgFWGhRQhOKmirBDtOTRFUqWa5UpOYMElQ1AyIHmIn50hicNLKLDtQdOVD8orJGt07k9WMAGgJIj7RAO4AhJmwEHrMcUFuHmBsn5f3VzkLVA2gR/MJnoQR085+VOtgGY2hukIVgJHupoBAtJNcuSTUKUlcpXq5QlEVxXJqqqCSpCaT+71F66qaSVZSljrXKPBeriuXoqFKX3/KuULu2CwisNiY1BSHiUpAbSlSCAVmSkAaYG5509a8wAWu1OhXomtcSTauvsKJIUokKtAPiT0WI/CLedQW3uUQOobKqrKwCyTIKEiVgi6kxEzdRNzPketE6saHkq9YdaUT+aJ/iOFSgyiVrUsWCeQjqB7XPTm1m2T3KhFCuKzuf41pthYchWgggGY1XKFtqG8giR0SDExRYYsugQjQXDc4xxedUs9aZXAUFA2mrgKjirLQorUFxVxpEwKvmDRZQCUWawSUplahte9hWc/GPLuxsuDLVLMFBpxSD7M+G/B+90okOKI0crGHMLG6Vsg7GfStGORjxbSl3tLdCrWHZUtQSkEqMADk+X76Ua6FlCAs0EwmpUUvFQ6V266inCJ2rlB2TgqpUUkk8VynTimE2/cVCnivaq4rqS/n0qLXJJqVy9NQupeiqGly8ahckqQaUrxq1hck1VKml6a5Qu75pmWpvwHQogeEmYFpKgDtuN+K8w42vSNFFUkY5pCUPqbC0hCVhSVCE6hr1A77EcgbVOUCtFxs8VWxHalrEfwxqRN0yUhXikSJskiCBfpcTV7zGiq5cotDM5U73WhZSUONkrBASUocJSlagDAUQOQTfmiNY4kHgqFzQO9cu7VZ4FQw0f4aBAvwLDnoAAOAAOASyhtHFZpAqwUEq2yiitagOcp20UQBDc5XG2pFXfGHtLSgZ8rrSvslQAUfCOm56aqTOGjgBkKKJ70aNV7GNh1Uz4oAPnG1uv8AlSeHkjd2JNORVi8t21Wz7I/RtiHR3jgU01G7kNz6SCUj+bSfIHcPgxwXk1JXBjpvq0C2bXZnAtDSp9SgbFGHTp1eTjipUseQKR/KKC/FA+Pr7JyPCOGwr53/AMKVpjLm/wCzwDRvEvKK/kqQPjQJOkC36nV4kBHj6OHAemquMZyE/wBm1hWxwENp+FvjSx6SjO7x9yjjo+hQafsFaRn7h/5Xp3Y/WuGOjP8Ad9iuOCI/t9lG9mCFiHMPhXPJTQv8ZE0VuNbwePWkJ+DHFp9AUPxOXZa5/aYAI/mZXp98CAfSmmYx/A390tJgWHh7hBcV9H2Edn6rjC2rhGITv0AUIge40yzHXuEq/AEbLL572MxmEBU40Sgf3jfiR6ki6R/UBTbZmP2KTkhezcLPQf2KuhaJP3xUrkorjsuSzQ1CQmuUhJXKUhrly8Km1ybaotW1Xbcc4GTAT3jRUEuHVrUnvFRCxJHdgHcWgcRfz+UDZbwJKF51rbOHYaYbH1ibFEoCEjxBRFkgAiZ24narBui4u3QRaWW8V9YU2hLDRKRqnU4ROpRnYaiYEkwBMTRmxIRkQLEKVifA2C3h02EmVqAsNR3MDr8rzEkoboFzW3qVku1OBS2tGkQCCPUg3/EVML8ys7RCm00y3VAcUQYRamGpV7tVYS3RAEIuUzQNXQ3LT9nuxeKxo7xJQzhwfG86LW+4LazxvHnSONja+gTsmMLGTZpbvAN4LAf8K2FuDfEPAEz1bT9kegHvrKfNDALWxh8E5x2+fshuZdolOGVKU4f5th6JFqzpekHu+kev4WvFgWs3Q5eZOK5geVqRfK931OKcbCxuwURWvkmgU3giqQMk1GYBdScjDna/76VUvG64clOlhXWqdYArVaVxxxFxqVfje9pq0bhehr7Ib2NI1FqJ3NlJ9pSSYkAxJ9K0ocbP4jv/ACs/EQQNB4GrofhFsi7VrTAbWpPVC7o/y+VacePZdO09lnuwpc3M3UH1VzM8lwGOnUn6o+ftoH8NR/nTtc8+E+ZrWixZAq7WZNgmusjRc87TdlcTglgPJGk+y4m7avQ8HyMG3vrSjla/ZZj43R7oFUkqi9ULl6uXL01C5JXKUhNcpS6vT5Vyil1LIO5wjSnXnyXipRlUpQkRCUpTfwiJ3STJrJEQuwtnrCRSCZx9JaUag2suqJPiIACQYEACx23Or1q4aAo1WIRmzuNfAUTG5/QD7O/r51SU6K7WhbkMBCAkCABWY4kutHpYztqxCW1fzH5gH8qewx1QpNlm2hT7Uq4q+yKYCVerSE0UIJK6V2Z7FNsNpxWYg3u1hvtK5Bc+6P5fj92k8RiwwaHz/Ccw+ELzqPnerufdplOEC2lIhKE2bQOAANz5/CvNYjpAv0YvT4fABlF3z8LPKcW4bmazHGjZ3WiBQoK9hMrJi2/JpaTEAK4aiuHyTqfhSj8XyVtAruFyRKlaEglVt6mEzTuyxiz4hDfM2NuZyPNdkyNwPdenf+JxfH7apQ9Jx8FZT2Z/mHwtVm9DScXoZ6TF7KLEZOlv2hS0+BMH1/urx4syfSstnohUNpKSJCgRufslPUGflXRxso93zxQJsdK1wY2rJrUc9jyr7oQ/lDYJC1BS/vHYq6QORV24h7hbRpyUENkmMeYUNzVkn9qVVvLVJINwTIgzHoBRXTA6FMRxGI76G9T7eKLYUrbABuOh/AdKmDHPhd2TpxBRHRQztsHXmEcyzN/AWnEh1lQhbS7wP5Z/09K9HhMc2Wspo8uPlzWPicGWfUN+PDz5LHdsuxAbQcXgipzD7rTJK2vI8lA67jnrW9FiA/Q7rAnwxZqNlhpo6WTahclNcuSTXLqSE1ylJNcpQF/FOLMqWpR6kk0gtfZRBNdSi1q/o+ZCnV9QBSs+hCuxb7FsnrWVmNpohZntngCMLrj2VpJngGRI95FaOEPapLybLFMJrUaEi8q82KMEs4rqnY7s6jBNJx2MQC8oTh2FcdHXOh2IHHrEJ4rFBjU5hMIXusqjnOdOPrUoqJJ3P5DonyryuIxDpjrsvV4fDtiHeoMvy1bhHF/jSUkobsm6WswmTttwCJXyOnSaz8S+QfVp3Lg4HZEG2PdSQs2uL6T0poaglXctlCgVQFATe08W9b1oYX+jMHu7Na68uXmlZ6e2hqjwx6Ffany2nyr0w6Rw8w0dfIbX3LM/Tvbw81EcWVFKRE32G0cflQHYt0jmMYRxugdK4eHD9lfqQ0Em/NVe1eL0obGoCViZI+6fzih9MvLog1vGieanBFjXkv8An4WMz5kCHjMgwbxI4HmZ2rCwsj7LOa0p+q6vtnT73wrv5KhgHyXA4dMoGkeEFUWOoJIgKJnk34rXY4xDsndZgkaRkOlabG/Thfmou0PeKPed4PCkqKTJIIvqWDdI8gAJnpUtIkOrdyNdRfheiXnJFGrF6XufI/hVsuzphCYWW9H30uJUJMmw1ldukDi1RNgJX6tGvKqPnoAmMNO9rgCTl9v296RA9254mHkLi8pIP79POk3Mlw5BeCFtB7H6FX8nzhbLm0HZSD7Kxz6H9+Vei6Px/W9l31e/8rIxeCDRbdvb+Fnu33ZJAR9fwQ/gK/tWwP7FXJA4R5cT0NvSQTZhlO683iMOWGxsufTTCVXprlyWuUJK5SvT6Vy5Z4UgtVLUqEf7KY4sFbgSFEiwOxifnP4GkcS8ZgOSuDS6d2dzBOI0lQShxV0tzeOt4kylRjpB5rJfo6gjtla4bqx2vyIqwjyZlRQVARyjxAf9tO4V9PFqsmoXHGBW80Usx5XQ/o37OIUFZhih/u7J8CT/AHrvA8wkx6m3Bqk0uQUrwRF5tT9oM5ViHVLMalG8bQPZSPQV5fF4gyGuC9VhMOI296s5JkilEKVWLPiP7WrQDaFlaNlwA92zEbKXHI4T1jrSjnGMWT5Kv1alHspyouTBgDdRkmT+Jo+CwEmOcXXpxKVxGJbCKryV/F5QhEeMnqLTtv5CmsZ0VBh67RceWnqeQS0WMe+9KQfH55hmFJQVDWrYATsOVe7yFKNvKTE0ab1/+jr6UmGxSPIDuPzbb1Q8vKxCgoLUhI+4YkHe8X9aVzBrv6gB+fOadMTYm0N1qn8gIblp9SSBIUQlV+swDx1r1UnRUAizRaEdoG+PjusNmNcX1ILGxCxeKzzE4V2ChLiSAQtKTN7mb71gYYs+uJ1O71rmFkreNIXnefF9QcbZ8QSrWCAQq3h4BEX+VNHU9s1dbV+N/VAdgGUTWY1pw8t1U7LuoKydJU4LAGdIn2o6AWtQsbma2r0PwJHozCZnGR/DbfTnV34ItjcC0qVKgLjcx+YuIpbD4hzNKsdyexuAMxzx6O+x8e/vVF3OFsj+IkuoCdKSkJmCb9AAE8bmn2NZISQaP8flJfo5jXWjY/bu8UBwuT5a6vU0sNq+66FBCSevI8jMe+tKLEYtgAfR70w9jBrqjSezTbau9cQpBF0rZUVtmNwrSNSeN+vO9FkxZe3I4Xe64HLsUOL757xQLagjxaFKvH8igPeBehv6Oh7JjJF8Rr6/lE/UOrVGex3aqVHwmD4X2lASpJsVRsY683FakEjm9iQ68+f881l4iEGyNlmvpB7LDBuhxq+Ge8TStwOS2T5bjqPQ1tRSZ296wJourNLJzV0Kl4GpXJZ/c1yhNqFKAA0itRLUqFuMI42rDhwtpRIGklYMRaCBEBVxcdDuKxJYzG8jcHuPzxQ9iQtTkOKZZfbWWvCbFR1eFUxIvEDfalezmCs1waV0bFMBdpA8z+/WtJsJBRi8UuF5f2Zcdx/1FuZ7wpCjwgGdZ/w3+VbLXjIHJFzCX5Vvu2GYoQEYPD2ZYGhA6ke2o9TM36yawekcR/YPNeh6Pw4AzKj2eycqIWqvNYie+w1bbW1qUedd1/wWj4NlKHI5A8vPmlTUQs7rqzalF8swElLaB++poGHhkxUwY3coc0ojaXHZajFoTh2vCAVRyogki/v5tXrJ4I8FhSI6scSSLI46b+G3BYsb3YiXtHTwWLxGKeeJnbgDb1rykkuY282V6GOKKIaJ+GytAILkE8WFvfVBMDpdKskzj9KPBCEIClCAr2UixI+8SdhWkI4YYRLMD2tmjc95J2Czi58jy1p23J28B3picUlQ06FhA4Dhj4RQjj43R9XkdlHAP/IVjC5puxf/ALf5XsxYZ0pUrvNKZB9k2O3qJ/GiCPB0AS8D/wCJ+44b8FEMk9lras+KpYdrCXIS6J3ju6GTgLomT/6o7jih/j90mEynCpUS3rSSfFqAiOYiomfg5A0CRw23HDyVTLOB2gPLn5q9jezzTglpSVkXCVCff6027o6J7ScJLmPLj88ggx457TUraHND04VZstKQkb8beu1Yha6yADY3vh4psyMrsnUobm2TYFwaAwFKj2hYJN7g81otxpib2Cb8dP581DY5HayaD7/ws8Oz7+EOvCurCR9mSU9bpP7vTUXSwk0kAK4wNd9JpC+0WMXiG0JXDboVJcbRY2FnE/aBPUiLb3rUw07GuLh7pd8DtKS5Bli0KDihKhub3HT03+NLYvpIuIy8NkwzDadrit63gG8Vh3MC5YODUyr7i9xHvv71DmvQ4LFB4Dxx+ELz2OwxFtPBcSxuFW04tpwaVoUUqHQpMH3Wra0qwsIijSgBrlyWa5RS9qrl1Kyz2dw+IJGExBCuEPACfIKG3SSkUoY62K0c54hBc1yh/Dq0PNqSTsdwr+kixqiuKOyt5T2fW4rU4e6SBIKxE3AgTEG/Pumk5cVGNGmz3FQXDZQHNHm1uALJGoiFeIWNoB2rm4eJ7Gkt4DbRdlHJFT26x6gEnEQNvChsH4hMj3RRG4aMHb3VnPIGi6B2CbOGwT2YrUTiMQS0yVElWkHxrk3uoG/8g60bEyBjaHBRhYi94J4qjl+GLi9UEjjzArx2Kns+K9XDHkbQRbEYwqUMOzZIEvKg+GdkepvI3oAw4iaZHGzw/K7rM7w0cN1qez+RlUADQDcqI/c1SDo2fFu7XZbzI9uaricZHCOZ5LRLyFSIWy54gDvHy+e9aZ6EfBUmGf2he/z3tZ4x7X9mVuhWafSVEqJOrkzfzrzEk0jnl0hs8VrsytFAaIhhMGFpA1QrodjUwxMmFB1O5HYpaWYsddWEXyzK20jW5cgx4o0/5++vRdGdHYdrOtmGoOxqr9dfP0SGJxUjjkZ9t0FzB9TjilKBHAHQDYVg9IYl2InL3eXcFo4eNscYaPhS4OeDE0rG5+ammrUTVxCK9yrSUrIKFJiw2MWJrZjZIyMiV1tcOHA8LSWduYOZoQsyxMqBEEKIj98VkSClsOqgRySuPEW2qoaCuawFTt5uUpJWJKRIVzam2yusaWeB4j8oL8ICeztxCr4THKxqw0uZJmRYx59DH5V6DCdXizkmaC7/AC4lL4hhwjc8Z02pEsyytOGISmSkiQTvPM/KsnpfBfppRlvKdr+4U4XEnEN7W4TGcUUpHhmTcW2O5+FIQTmM0CPMfbn5q8kQcd1WxeQsvKkABW8db/Cmos7rEbteR/Y/lSJ3MHaGie/hYTcAUm5r20SFdstuQ/DrIsCQUGUn9+dem6EmJa5nLUfulekIhYdz0Ky/0uZYFFnMECA8NDvk4gWPvAI/wivZ4aTM2l5PFxZHrnRo6VXq5cvRXLlpMH9F61p1B1zyIZWAfQnelq71slgG6sPtY3BtKZdPfMfeA8bZt4oIJSRA86rLG2RuV4sILoa1CoN4XQ2XO/LzahJBcCrTaAYINt78bVkYvDllFjQO8D3QdysfjjrdWoAALUVCDNlGa0oWkMDeWiJdBPwOAW44hpI8Ti0oT/UshI+ZouUhVzgrtHbSGy1gmv7PDtpbH9RHiPrAHxNYvSc9Cls9Gw3qUxodwyVD2jZPqdvhc+6vKNd1kuuwW67st0V/s4y0wiA0pSlK1rKjOpRuVK/yqZMXb80guthwocELqKbTTXut/leLSY0x6A16vCY2KVvZPksPEQPabKH5lnDrTywCIJAAIn7O4+E1iYzpbEYfEyMbVabjbQapzD4OKWJpO/8AKDgk7++vMvcXOLjuVpUBoFaw7hSoWk2irRuMT81aoL2hzVexWL04d1RMqJE9L+Xr+VbEMgkwk16vLhfhpw7ufOkoyO52Dgs3g8U4tBK+sJgAW5P4VlysY0gBauRrXaKf64GSFrPg+0egOx+MD31EIzO0GvD590ORudtDdUM3+kBMFtlOuTGokiD7r/s1vxMkLO1os18Aadft+VS7JZs8+4vXBkk7QfPYQIjbzNJ4rCsDhW+v5TDCQwjw39P2Wp+pp0Srn4ADmayyzKxrtbPz1KJ17s1N4INm60sNF5chuIJUkz47AgDe9vU9L043CSFzWn6jrXr+EdmID7B4Kp2SxThV9YT4BBCQRJIO5PnTDsS7BP8A6eruJUzsbKzK/ZbfC5ylwaMQkEcKA/Eceop2DpmKcdXjGiudfK8QsqXBOjOaA+Sq5hljrY1CFI4I3g7SKRxvRU0IMjdWcxy7wmMPiopDlOjkM7wisgabJzKCq2Z41ZShAJ8ao/wi6vyHvpqJzjeY6Af6UsiaHXyTy3BBHNjTHRmI6rENJ2Onr8tCxIzxEeaTMMv+s4HFYXdQT3rW3tt3+ZAHvNe/wr8r6XmcYzMzMuGTWoVj0kmuXJK5SuhZph8G8sodx6XXh7RWhS0A7EE/ZHvEeVL6cFtZr0AUyUqwqm0OL14ZZ0pWTq7oqskpV9tomAQdrTapUVoa24oBn2FGEdLqQO4XMoFwFpGqL/YNzApbFMzNDTtYQXs0WfzzIw0pDjd2nACkjhUAqQbm9wfQ0wyOgBdpQyWFqvoly8OZghavZYQp09PCNKfmoH3VabRipCLejxl7Elw8krP+I2HwivDdKYi3Fe1wUQawK5j8GXXm25ISAVn32A+XzrJikyRudWuyO8W4I2lkpAHFJvB3KsCCnpBqgdRsKDS0DTyMSnVpAcTzEg8QT516mOVvSTXdgCQDQkWD3XoshzH4R1X2Sg2bO9w37CdVxyAIMTN/PjisqbDmJwZIwAnu9jdfZMAyTNJiP3H4WKxedLLlnFpVp1AnTpN/Z0xYRsd7b3iiMwzclloIuv5VBC8TCJ0hstvSuB2r1PPRSt5u7iyGgkto+2vVKjBk/ZA328q4xR4UOeDd8FoQxljaJs81qG2oAFY7nWbVi5SpaEEEAyIvVc5CoXFCsyyEKBUlSUDhIAiR1keXBBrTw2IDWW8i9ed/j1QXszu0JvTlX59KRHC4Jlh5xRCgTEpQOokkkgQTPFunm5jZGCcteTQ4Dc2Ad/4QoYnmMFla8SdNO5R55nzmnS1hzH2ZiZ4m9KPdFMaFNaPX1R4cLkOZxsoE1l2LxCv4w8B9oXUSOkbCrZ4mD+kCXd3y0yXMYKNBafCYEpASlJt5Uh1U0jvpN+BQHzN3JTnWinfehSROjOVwormvDtlcy3MyhUK8SFWUD8JHu4rU6M6SfDJlk1a7Q36JbE4UPbbdCNlUz7Cdy6QJKCJA5APHmJFd0phGYfEFjNjqPwj4KbrorO+3ih2EwfeOF0yEpsmbepv+7Us1jjGWjzR3yBgririgIpZoI1VRdqXALCH21RIJAj+qw36SK+hYWXrGMk5hYOIYBmZyXD+1WB7jGYhmLIdUB/STKf8AtIrfabAK8+4UUKFSoS1yhG8kytbL7CVtrSe9SjUpJABJ0qB42URueb2sHKE/bwVvVZAMOy4w8QpC3CUJBnQ0gai4fuwbD/COagapyy/UfLWf7aY9DmEVAGrSJHQgrTI5uI+IoWIFgeI91R7HAnRAOyz31nDOYFZGpCe8ZN9xcDp/L/jphuiQlFGwtf8ARWzpwuYP7HQlpPUatWr8U0vjH1HfcUTBMuSiiuUMjUojrHw3r530g+3kL2sQpgRtLadQJHiFp5g8UgHEdkrjzV9LMgneKOYwWlyAX0aUCfOkrpEPchuY5g42gJReTqB2IVtJO+3nWhhpn5cl0Ac3nXNEELXOzEcKUTbajAKypZ3UokxNzAO29VnxL5TmkJPJEaxkbeyKHch+KyB5ToKAlaedwrfc22AtG3pTEGJY5mUA33arMfhQZutL61vv8lrMjy9LLiFHSkA3mOQeN67Bv6vEtfMQAN7I5ctUXFS9bE5rfmqu5ngkoOpF0G4IFhPAItE1PSeBbG4yw6sOug0HmNK8a4IGGnc8ZX7jTvQ8GsXxThCmwOF7xxKTcC6ifujeaf6Pwxnna3hufAboU83VRlw8vFMzHFhTi1Dk28wLD5Co6QkE2Je9u16eA0VsPEWRNaeSG4rGFIkBKAJv7Sj1N/Cn51AEZoMGo49/zbZGbGSTZVNGNdXpuvSQZlVjtwPDfrFMume1tZ/IaKRh2A6t9dVKhJBtPxNLmZ53cUXq2cgp0uE/aV/1E/AKkCqmQk9vUIZiA2UzRtBM26X/AEoBq9lxFIx2iV42zvLYv7zW106LlY7m0fus7o8dhw7yh3e2PpWMH0KTuTVQ4Y+Eelc40SFd/wBSc4dIChwfwM17DoWTNhQP8Sfz+6yMY3+p4hc2+l/DBGZuKH94hC/fp0//AAr10JtgXmphTisYaIgpJrly7XkKswQyVY9TWHSkCXFBsumOZEg+VifSlzROi1owXaAWVnc1zTvoDA7tvXPeLIK3VIjxLmTFyQL9elXrL4pvJ1el6+yE5h2o7p1LSwFIN1g+0lMSCqbEmCqOAaG52XVAe7Koc1ygYbE4fFMCEOEBQTITK50m2wmJHMURAlAcwuW57KYRKcBi4PhcxgMzwUtq48yRFJYwjLR7vddgrDr+bIvgsCylgL1/xVKJABm08jivFYuLD9R1hd2ydB3X9l6SOaYy5a7IG68oCd+KyC1pOp+yaBNbK3hYCV3m3v38/U0VrWtY4hwOnn6H3QJLJbpxVrC5KtbfeBQEiwPI8zxT2H6Dlmg63MBeoH88ECXHMjkyEXzWXXlSFr1qKiN9JJ0z5VnDEOa3KK8eK0i5F8O+22I0CeDEge6oikABJFnmda8tkB8cjzodFOvMWzbWSOgEe78KI6R8hykkjkAAPshDDvGtKFOZsgxCjfqBVOojaTYJrvVzBIRuPuoV5y4XAhlKSFHSUK+2CdMH9aewcz2PytGjtMvA+PqpdhGZC551Gt8q5K2lLUBzxx/yxpN+mqbCfKaoY8Dea3D/AMf5/i0PNNeTTx19v5UCsaoymSlJ+yDb3xvSz8VIWljDTeQ/fn5owgaNas8/myq4zFp1eJwd4YkQPtGB+XxqjutmJkIvmfBA/VxRO6rw+6gZQFEkCdJg+REGPnUOJaB3pxmIY+w07aKZKKGSrEpFNE+lSHAKQ4BJpI4rrU3akEVFElUNol2hc/jafupSkfCb/Gtbpon9QGf4tA/dJdHt/o5uZJQl6YsbVlNrinxXFTtbRVDuhu3TnhKSPP3XA/TivV9Af9D/AB/ZZeN/7G/OKwX0zj/esOr72HT8lE/nXssP9C8xOO0ufg0dApLauUara4x/Dd44C4+4togLV7ap1WA1giOp4ttQOs0XouucQQNPAUiqFtlpLrmphBjSpUuPL4BSBITvvVS8IeYjvQnMew7DpWWnF95Gohc6jPN6qyRrtkF1HcI3neUraytDb8d420lccgoUkgke+ig2hgaEdxWhyQzli7iRib830o60jjhp6e6t0ee0PNOwG0eZ+Rr5vOw5ivWk6BXWWytQSOTA99UjidLIGM3JVHODG5jwRBOAcaKtSbFJEgyOfhtTs3R2JwwLnN0oixr824pT9THKBlPFXMizYJHcqCiRdMCZH3fXetjofpMCIQybj6aFk93l7JbG4Qud1rduN6IViWSFqKklJJJgjYEyK89i43CZ+YZdSaPI7J+J4LBlN8FV0hSQpJCgdiCDQXsdH9QRWSBKnKVQVlMAbFUDxRaJuevup+CCVrDM4UBz0s+dePkofimEhgOvdy+aKi1lyBeTI+HrSZncdEYvJ4LeZTkuHbhxtNyAZJJ4sROxvXvcNhMPHT4xuN/9rzM+Jmk7Lys7nrEPLIlIJBi3TceX614/pcNbi3ACvnBbWBeTC0HVDmxqWB039P3as0mm2m3HK20O7T5Kt1SVNBMyJUZ1A6h7o3N6awWLZGCHn5+Vj4nDOlILaHfx+dygYx5aK0qcKlFSiZEAqUrdPlv+PNGmZ11Fo009uK0sJherZT9Td3zv28ESwGMDgkbTakpYiw0Uw9lIg1iUEEHfi2/WTx1qNchGnp+6XfG8G0FxXaBkYhLABI1aVqgiCfZA63O/+tNx4EmPOT3+X3SLsfkl6vyPijOVDW62APtiZ3Gk3/A1GBic7Esb3j8p3EuLYXOPL3Xs3e1POH+Yj3AwPwq3SMnWYp7u+vTRThGZIWju99VRM7UomVYSKGhlSuf2Znr+Qr1vQAqB/iPZZWNIzt+cVz/6ZzOKw6Pu4dMz5qO/wr2uCiLx3LzOINOKxWHS3yDWwyGGtkg8ycFPpa6H50TqYf8AFDuXmtbjMrSnEHXiNSXJPc9Um+4FoImfKvLah2p8l6kG9FoMkwLOIfDz7rZZSAUo1aVavshaSAAkCdj8eINv22VHE7BF81x2XsvpxUpW6lJbbabI0mTurgm3O0negwYfqnON7/Zc6yACK70A7Z4hwYJx96z2LUlDTczpangHqb+gFPMOtITyADXAFFexmKSvB4tCdX8N5BIPmlG3lAmlMXeU381UYQDMK4rQYPMkpZcaCbqUb2iFAX9a8dNjmwRy4fLqS7XhRW6MM572S3oAPshzSSlepJ6HmZHSsJsrmkObuNk+QC0golh83dKhrWAAfESALHrxFa46YxL3NYXAa7179yTfg4msOUXyS9nsQ19YhC0rMEQCCYn2o3A499T0NmjxlFtg2Aa08VXHB5h7Wm3+kRzqFO7CEJEzzuYo/TTg7EjTRo1vjxpL4O2xeJ/hCMrxoCwe77tIPiSQk77kEb35pOHFxQ4hrtCzS9LI9Reibkhc+Mjjw1V3PcyS8AhAIAUDq22BtEbXpjpfpWLENEcYsA3fkRt88EHBYV0JLncRsgTw45rCbzWq3mtt2fKu68RJEwmd4Hnzea9x0NLLLh88nl4D+fwvN4wNEnZTc6w7ayhKwfEqJBjj58Wo2NwcM5bnGt7+SjDTPiDnN4LCN5zh0uKSlcjVpCzGwTIJ8p1CfLzrxuLwJDyIzbRt3/PutBnSAlAzCvZFVOAJ18ATb5VmNBzUmgMxrms2thT6kpMBufZHMCb1ptIjBI35p80xpcjCcOE2SLCwpR7rdvaDnLt0wIQEEESqbE7Wq+a/FS4vL9Nlz5WpT6FuSrx3AMCRZIkDi23St8ZWxFrOS8/NhMXI/O8a3XDQcxVaBdO7JyO8eVfuwtU+ZJj5TQei2hsr560Y2/t/tafSH0NiH9xA8vlKq0mTB53rDcbNlOOOUaKR7CEXBkdRUkV3qrJQd1C2s1Uq7gFY9psAX1Hp1tbrXsug2VhTzLj+yxccf6vkuX/TBjNWZLQNkIQj3wVR8FCvb4U1GBzXnJBbiVnMO1atVg0SD3aqzoHn8avohZiul4XK9CofQoISZC49g9DaSnzFq8ZG8OFP3HFeoBvZa/BYZhGH0sITcAFWuRtvO9AxWFkkbkYavjqujkDXW5ZxeW4LCuHF4pxK1JB0g+ykeQNybC9WwOBGGaRdk7ldiJzKdlzXNu0S8yzAOEkNNzoEEQEiZjgzHx+GnGOKVmd2coW4+jQoLuOaClrU+0F+LTBU3KfCJkmVTqO9qTec+YIjBkylH2fxHzrwfTEeWfN/kAf2PsvS4d1srkU5C6yapMEKLM8Al8QvfqDBozMS9jswUMdkVnIsGjDQprSNwVWO1jPUzajsxeIimEnGuO1Efyl5nCZpadlJiM7bfUrRulWlXrEmOu3yovSb3TPEhFWAdO/e72QMI0C2g7GvnqoFtrCe8S0pSBJITpB84kxUYPo6SenEHLe4TE+IbEwjdwGg5qhnGdoblKWnUOIUkLSooUNK/ZuFWXJHh33NaeK6Kgy/0wQ4cDqsrD9KuL8sjb8Nx85K1lWGcKQpSFKUZURB52HpsKyuod1lZCQOQPyrW2+djm9lwAV7/b77ASlbDgTJgjSQeeNgJFvOtZuIxOGjY06AX3X68rSf6SGdxIdZ0T1Y9zFLbhDiblQlMCACBCgdz03oE8+MxVFp14Abfkn4FzYosOHXSx2N7DLS4pSHIbjUjlWoCRvaJ5Gw+ND/AOQ6tgEjdTp3Eca8ki3BNLy5p8BrvwJRvOhDISoqCikSRNtIM/P41mQV1pLRpenz5S2sMCXWVDkOVBCCSSpRG56dPKrYmfO6hsESaSjSIpIEgGZEee1LnewhmzqU14eBCTvp6bz/AJVc6O0VmG3uI5oYcvaQCSkcq2m9F66Rx37kYOtH8uZ7nLUz7Tun1N5/AE++vQSsEPR73cXn7Xt6ArJzGXHAcGj591UwyTvXl3b6J+Q8EzMcQW2lLBi1vOrwNLngKGgF1FU8uSrQCs3Nz+NXmLc1N2R3HgjmWtyppJ2Hi9w8U/hXtehoizCszDez+F53HvBkcR4LgvaLG9/mGId4U6qPRJ0p+SRXs8OKoLz8x7Kc1ArRCz3WU/UOo+dWsKtFfR+Y5ch0aXHVX+7A/Kvm0mB6zSWQlerZPk+loWOzL6PjpUcNi3EK4CoUmfQARTMbZYgAx1gKHTMf9TdVxbtdkuNw7ujFhRJulUqU2ozuCbCJ2gEWtetKF4l0G/egO7OpRjss0MK0HXAtK3VpQgixv67g72HHpLE1MjLQlmEvlBRrs5nScNmbKntDLql6FtISNIS4dMlyN7pVptsLz4aSjaU3KbXR8cz3bi0/dVI/pV+lq8707hs0WYf2n7H+VrYCSzR4j7hUMbiktIUtdkpG/nwAOSa8vFE6Vwa3daMkrY253FUspzwlZUtB7v7JtF/S5pt+GYyuJG42S3XFxykVex3+d6rZnjQFCFiFLKkAEQJBWqwFyTt1k0eGNz4ySNdv29NvBTnZA9rb01N/ON+tpMldhxQc8Clq1R1UR8D4QPhQcUCWAN1DQmmUAXVRKvKzQq7xlDnhHhsNX8Q+ymBc+Lcc3rW6LfLHFTz2TsK+aLL6QmjumjtD7ckTORIcxbzjydYJQpMgxqSjSCU8Tc+V63Y4yZHOcOVenFZMcdEuvevsir+YDC6WwJO5Pkfj161k43FfouzEO1utiHDHFNLyfBIHkBBEa0K36hUbjz/GKwo8U2JhY4ZmO15Fru7v+x4IhjeX3sR6EKthvBsd7EdJ5BoWHmDB2TqdCPtujyds6jZC8yxzzQOkFaEnxN8xyUHg+RqrG5x1LzVbePejNjY7tcVTczxrEwltQt9kyFSREQfWaI7DSQi3DT1+eCvAzLZvVG8MdNomx58o/OkQ6jfiPVBkGbiocXhyga03tIvzGx6UTIaaTseXzdWjkzHKVmldtGFGFocQQACAEkSBBG46VpHoyQm2uFKGkttWWc3YxMMNqUVuWSClQ95jYDzNdD0biOtFAb81LpmsaXuWnztRWtDDYJS0kCw5j8gB75pzpeTM5sEYsMHD5wSuAAYx00m7j9lAhhYG4j86wMri2xsmTI0lCs1lbqGjx4le7YUeMFjS877IsVVYV1toFYBmDAI8hew61OFZ1srYzsSqSOLGF43CfnuZDC4LFYmYIR3bW/tKsL+pT86+lYaIZg0bD9l5PEOJbruV8/BBQSK3yCwrOsSBQ4h9xXWKG98h2RGMjaq8r86H/VRKYvrIP7ivG9YaT6gLogmrsKgoXj8MzjW14Z8agRIPII2IPUfr1piNzg7M3cfKVDWx2XEs5xC14xbakJnCnShnVo1EWLiDcGIBCZ9mI2NOuk6wZhsqxMyacVcxOCcclbbxYka1taklKeqkDV4UG6rA3niKE1wGlX3o7m2bvyXWMtzBOJwrGKCkrIHdPFMRqTaRHBud/tCoxEbZGkOGh0PmugcWmgdRqFSzvAlaNIIlJkAzfobHeDXg2g4TEOjf4H8rcmYMRFbN+Hsq+UdmyooQp0gT7PE+fW+3uHnR45mz4gRitTVn58KCI3xREk7DbgPzqbUvarLGm0w2UExBShYjWm8jYhXhgweR1vr43DsYQ9vgddPnckMM8va5jhY322PzS1kDiS6lQeCUpSfDCkqWZEiCR5cVSGGNgLwdfTXw+BHxWJewZAbHzio8qzEtEANpEHUJEmykkqTbxqmRJkAE9aZ6z+46/Pnqsqy5dZyHNl4hrw6UhAAW5pg7eyESQlXnJHleiw4uWUOaBly1ZP7D/afEDGBpJzXwHz4U3PWNfjHitB62+1HNYfSjHzSCVpvSu/TitLBP6vsHT5sguFxPdGIJTsR06f61kjXz371oSRCQd6KtJSoqUk7iwVPCdulc1rXGgQKHHw7tPVJOLmgAjbl4obinE2hQJUSNIPS5/ECrGB/ViUjQlMxnXLyVfC4dtKpCQmTcwN6G97yKJtFcTS0OFwhACja/PrxRYMI4gSO0FivVZskuuUKq4jUVCBIJvPtX6eVCezUhu4J89eCM05QD8Czj2QNLcVLYBnfaZ4pmPEy0GtPcmy9mWytBg2MFgm0KS0O+IlV7i25m4HlXpf1AweHY9ze2Rsf35BZDopMXI4X2B89UKVmJB1MglRJKvFAM3I2PNec6x/WGQktJ4jv+c1q9T2MjqIGyaz2nZ1aHUqbV/OCLi8hXs7jrealmFe0Zm07vB1/N7+qC6IjY/hRYRuVrfJkr2noCYjyiKDNISAw8EwGhugRjBNEDXG9k9STaa3Og+j3ZxiHjQbd55+SzOkMS2uqbvx/C5/8ATRnQ1MZeg2R/Ed39s2SD/wBx/wCmvbYZvaAXnZHXZ5LI47DyG19RBtXpCwGisOGTVzVGG0z1A38/L0qwYFbM4DvVnWj7g+VXyjkhU/8AyXcl4yVRz+NfMmtteoJQXMs+ZQ2pRebCJ9rUCIAvEXJkGw6Uw2EnYKhcud5n9KKkLP1RsQJHeObkReEjYTBueLinI4K3VChOMydx9JxrynVukanEIbRIRGkH2gQNMAmFRz1N2ENOVuyuWmrKEMY9KUgJLyEjYFTS+ZkAoTF+RRSwndVDxwW7+ijtMhL6sI65/DxPJQEKDsQknSSkyLSYMhO9dk0pVL6IK6XiWFJJB+xZXpwfMfrXkensFI49e3YAA/lbuBnZWTnqPwm6wRb3EV5iyE/WqBZtgnXF6lKUoDzJI9JrSGOc8U8knvRo2saKYKQXDZQlb4akBMEqJiRFyE2tcpO/WtPBuErgHmv9fwsvGYdsYeQNCLI7xufv6o27kuGw5l9CFK0FTUAgrVKBBAP2YkkH+8nitZ7Y4WnrRp3cVl4brS6ozrv/ALW07OYbDtlSWioJWAQhWwJAkJJkk+Ebn05qmCxmEkkLGHU1ofYc6+WiywSs7R4cvdW8T3aHJGsEJ426880riZMNhsUazZsvDbn66eCLH1kkdGqvzQDMsMCFK3WmPZFjN4j0O9ZeIhBB2ziroaai9v3WpBKQQOHesxnOa6QENSFq2/lGxUelLYbCF7rdqPc8k1dC3FSYHK3UobceATYpQmIMAglR5lRPyrS6UY+OKMHTfRBw0zJHvypysZoX45gELFj7KCCqTET5TWTGy6I8PVMP1BHcU3N+2RcBTh1AxuU8T0G499OiGd5ubY8OCWiw8TNSgGWP4p1wJZ1qJMSNr+dNswQk0DUWSZjBbyPst9leJbwg/i/x8QTCimCEfygnneYplkmD6PcQNXca4fys18c+LFjssVXMVpxLveJQgR4bm8C5mJ8V9orMx2MOJkuqFafym8NGcNHlu/nBVVtkKiLVlg2E8DYTnm0qELSCOhFVa5zTbSq0reWYQLVtDad/wAHrtWh0dgnYubLw3ce7+Uti8QIGXxOytZrmzeGadxjlkNJ8A6q2SB8R8RXvoo2tAa0UB9gvKyvPmV85uY1WJxDmIdPiWrUfebAeQED3VqYFmZ2Y8EvOcrA0LRIGtg+V5reH0rBPYnHeqgdSEgqUEjiTv/lUF7WiyaRy1xdQFlN/2o194fA0P9VHz91b9LLyRPtH9IqnQptoFKDzJC7HrwDyAPfXjIsK1mp1K3CSVhsRiFLPi26DamaUaBW8ky7vnkt6XFDdQbTqVpG5AJAriQAuFnZdEw2GU2nQlbjrer+zUkIxLJ4W3KgrVaBpKp6UC73pGIA4lC8Rg0Op7xXdP3OpxDK0Og894htchXUlEfzG9WzEEDZRlDu9AHWMIDKFrSoHYuFJSeolixFuZq4e/wCf7VcrNvnsu7dks7+u4YKkHENABYkHvE8LlNjMceY6UJ7Q8EEdxCsy4yBfgrmIw2lIWj2eeYP6H868X0v0V+nPWx/R7H8cluYTF9b2X/V7quXeCBHXmscOGXLX5TobxtB83bWiHWjBFiRvB469KdwM5Y7dLY6PrYqriNeWo9f4WfXilLdaCi5IXET4QNJmB6/gDWrNK6SNxJ4aeqBhsKI3Rure/Hjv37LVZDilNjxjXpmBPA2M8DmsjMxswky3x5fKWjNDnGXa1ou0UuNoxDJOkjxR04JHlsa3elYOsa3Ew6gij4d/3BWbgHBkjoZRrw+fcJ2VYMrbQ8HNLgTG3hIH3/K2/rRcJCJGNlLqIFeg4/lVxMuSQx1pfylVy/J2DiA664hbyjISm4HQ/h76NgnYZjgMwc5xNVr31/tUxTpXR0AQ0BVe2faFCHAykJPdTIUJ1KKCAOLAqBN+D0vfHzRvIYQDXPwWQMTJE7+maVXLe0jS2r4NtSh4T0Nt7ptO8Cs84nCRUHQi1r4JuJxUecyEa1xVTD4xIUpacKyhZJgkavfbTE2qJOmGj6Ix89E6OjS763n56qyvM3/Z7yARGlKQn4EX+dJydLzvaQKaO5HZ0fA03V+JtT4XCpTE3V57D9aQzNA01J48B+fbxVpHl22g+6XMcQG0hRWNSvZG8/DapMJPbc6yeXL9lWMZnZQNENw61G6v35UJ4bwTdAKZpBcUEjkxVoYXSODGCydkOSRsbC52y0YZCQGUHa61fifhYV73AYNuFiDBqeJ5n5svLYnEGV5e7yXDvpY7WjFOjDsn/d2TAj7axMq8wPxnyrXERazVIt7TsxWIwjJnbenMNC5t6KJXikeZxam2XNW8AD1O1aT5THE5x3CzHRNlmbWyzanJMqMmsN0muZxWuGgCgk7wVHXBTlKcE0BVtSIbmpyqpdSPZBhmyFS6Wn9mypSkNqHKFLTdB8z4dgY3qHtcBouZI29Vrckxywe4dCw4L9y949U2/gqcJCrD2dQkAlJOxVfGdwmmSgWCFLjMThXSEKKkvoPsr8Kptyod4kQLpQo+nNVDXtHcr206DdCF60mCFKkcl+P6RrWRMfa+VSdQo1BVvLMxOFcTiWgELSIhSUgKSQFFKin2vEoAkBUHzqgcQVdzA4Lr2T5o1imvrDEFP980blChuCIuPPneiua17SDqCghxBrYjio8wwHh1oug7jlP6jzrxfSfRDsMesi1Z9x493f6rdwmMEnZfo73Ql/DhQifO9ZDXkG1og81URgUawTGoXgG4tyOKMZX5dNipsE+CtFrTBHMjz/0NvhQ9S27XXaTLs7cYKtBkHdJ2mOOn+Va2B6QlwwygW3khYnBRz6nQ80TybHLdQpKiAbeFIgaSkRb11UnjcVNM7Kyw07gd1/nwSssDYiDv3lPxWI7rxSNSSCkTckGw+MD30phOsila/kQaVgzrQW8CsljsoZxLqnwt1KVqKgARsTPMkGtWfHubK6gCLO++6CeiYnAE6Ghdc0Vy7JyEBKPZB3Udz5k70qGTYh2et9L2CeEkUDQwcB4lXxlIg6l3BggC3rJItTLsAGiy/Xw/ewhfrSTo37oVild2SU+MIPvIBvHuvSRYC4svTmnAS5muiIJx7ZZLiFAg2TG8294O9cyN0YLXDX27x85JbKS8D1QJMqcM8b+pjjrRDTWeKb8EQw+FdcVpbPpaw9/SohhMzgxjbKBNI2Npc4rTYPCBpPdoAU4r2lbgDkzFhzXsuj+jY8L2t3H7dw7vdecxWLdOddh8tc2+k7tuEJVgcIuVGz7oPxQnz69PfXoIICO0VlufnPd7/wALkKBKwOlGYesmy8B7qx0ba02Byw6QpXhHTn/KtuOLRY02JGbK3VC87VqOhAsLnqf1rPx4LqY0bap3CDKMztyhXciJBkfAj1rN6tpFp7ObpJ3YruqYpzFEmsHaSRXNZzSbpuAVplkC8UUMCC6QrUYNnAvBSe6UhaokBYCUX3bJSSASRIVMeYpOUTN218E5CYXb6XzPsq7qQ1/uzjDqmrkDX36bj2kjQgp6nQpCvXahWHDMD+yP9Jy0rz2Cd0ISpCn2yDp71Dqu7A20PJb7xsxHgcRp2NxQy4fKRAw8kAcwqVGErS6kCCFBC3I4CVNKDihPCtO1gdqguVmi0UfAjxEDxQqJVEKi8gKSD3cCQRI5oATBT+zubv4RxLzEnwiUg6kuJCSrQoJE7qEEJB29Ks11FUewOC7J2ezprFILmHOlwf2rKrEHafMGN9j5bUbRwQLLTTk9/L0uCUQhY9pPE89NPpXnsd0C19vw+h5cPLl82Wph+kSzsy6jnxQh7CltZ1phX6V5eaKSI9W8UQtlkrZG2w2E0n9aENFalHmGXhKQ4m0iSPwPwpgGgAeKiKbMS0obhcYR3mlQnSmTPSRbr/pRHR6C9tVdwBItVlYkTKriJk9Z6daIIzVNV7AVnBZ0whIbVKdPl+fNDkwsrzmGtoTgb0RRntKyBCFiJmCPxNMslxEQysFN38UucPmNu3SvZslxMd4BPQkc0KbE4h4oj0V2YdrDdIThXhEn7U0J7eA4JoKm1k6u8V3SoSseJMbeY6etNNlMjQ0tsjihuIZqStNk3ZcJR41kJ8xBVN5HUQd/WtGLoiXEOzyHKPv6cPP0WbP0qxmjBZ+yNtrSlJQ0AhtPtLOwtyebcV6PC4OLDtyxD8nxWJPiHSHNIVy3t59JAAVhMAqxs4/yfJH6/wCtasMNHXdJvdnHd7rmicOpR0pEqP7JNaIiedGDX59kAyBvacdFoMryVDI1K8SuT+lP4XBMw45u4lZWJxr5zlGgU2YPQklRgdOff0FMucGglDgZZpqzLThU5q6/uKyGOL5M3NbLmhrKSYljSr+q3xqs8IDvFdHJmb4KP/Z6qp+jerfqGo0ECqrPtIa5SoXSDVHUrtBCIZTnK0gtFzSFXElWnV91UEQlURPBgyINKTMH1JyFxHZ4KRSlhxY1K1E+JlxwpUFXhTLxJSFQTBMWgeK0hfWXMjsBvLxVlMPOIbfBUJk/WkKDmkSTpeHtAAH2rGDYUk48VoNFClJmLNkhyxgyXp1BRSYCXU2IBegcbwKhcVSxDY8SlIWUgkBUIcFlE8AEGGxaeeYqtqa4pcHiFtLC2ndDgJ0qSSkggJbFlWIkzGxtvVmuINqrmhworo/Z76SWndKccFMuWAdAhJJEjXE7AXO3pTAIcli1zPBbxK9aATpeaNwtMKkcHyqk2HjlGWVtjvVo5SDmYVS/2My5dC9Jv5jfbrHvNYc//p+J3/U4juOo/K04+lJBo8AoQ/2ZxGrU4vvkp9lKTAHSRbUfjWdP0ViYxUbAe8Gz99R5J2HpDDnjXignaLDrbuEFBgiSm14MXtwKThiewlsrT52E6JWObbXArIOtvObrUfl8hArRa6KPYKhJO5WqybCqDSUhtSrRZJP5VnyxSSPLmgoglY0USERHZ1bv/wCqfeNPzMUSLCYw/SD88UJ+Lgbu4e/spGvo/VudKegKifwEVoM6OxrhrQ8T+LSruk8ONrKK4Tss2mNboMcJBFj0J4/Six9BOJuV3ol39Lf4N9UWZU014GUalb2vfaSeLTW1h8FDhxTB58VmTYmSU28rP9p+1GGwg1Yt3xcMtmVG32j09PjTwbpZ2SjpBdN1K412w+kLE46W0/wcOLBtNpH8x59PxosOpsDTmoya27UrOYFBmdMgdbVp4eMk5q0QZnCqtabKGQB3h3PyHArWhbXa4lY+KfZyDgroXYrVboPzouyWy65WrM53jCo6fjWV0hN/YPNbODhDRabgUbVOHZoFMzt1YxbdpmaYlZYtCidrS9q9a7MV1KxWYhJq6gqQqboihFMN1URPlJ3t+7DzoT5Gt3RmROfspGs4WAEqSh1I2DgnTO4Sr2kg+RF6z5XZitKJmQVaO9nMW2pD50OtjuyAlKwtPjWhFm1CDGrdSukzM0FwRgbRd1y/gWm69KwHO7sFqGrQqUqhLYFtwFRG5oBzU3yVN5BTIU2QsAJB0qa1EpWoKSpvwKuoCeDe5ipq11kKvi0iNRkiSQpY1CAtSrLTPDcxx4ZrgFxrdCoKAQnUNx4Va0+FrSZEWA85MgVdDFhE8p7Q4nBrQGHlIF9QEFs6AVQpJsmUxcQbdKu15Co+Np/K2WVfTC2QBjsLpVqKSto3lIFyDf7XU0a2nuQKkb3+62+V9rcI9ZnGIHRLp0qsBa8TuODxXVextTnoaikYOJeIEd2sRulY/Peuy8woDmnUJn1pwH+wNugEjbp7jvUZW8lazzTv9pOf8lw+41NBRYTFZg9M91Ft1EAfEn19PfXUusBD8ZmyWxqexLLfqoE/AQNqu2Nx2CoZmDcrM5n9ImAa2U5iVcRZPx/zNMMwch30QzPyHz3+ywXaT6UMY8ChkJwyD9z2o/qgfhzRDhwzxXDt7nyGn8rB4l/UdS1FSjuokkn1J3qsj2DQojQRspWFoAH7vR4XwAAITw8oml5KgOK1WPa4CkmWOaVocM34UgARzToFBZUju0SVTzrGACB7o5oE8oY20xhIS42VnUNSZO5vWUI87rctUuoaIijwgRwafb2QEoe0dVZWhJSTNHIGVCDnB1Kp9dT0P791A/UN5I/Uu5qyazUFJXKVVW6mb3A+fwI/GkZsRrTVpYfC6W/0VJ9/VaAkHoLep3Jt50kStEClHpTpPiuBYAb8XvaqrkY7HZiljEjvB4FjQodAVBQV7lJSfdVHA0pBpHcJlKk94y8DqZUdShcrbU28EkHYqlc3Oyt7RVCbVwKKixmNDYdeT3gCVqSIdEEIKUpIGjeUIEGd1VcDgqOPFSO4psJGq3hJ8UpsiAqS3ySjfT9rziorVQSFC/g0lViDvexMJVuSAlQBcClGxB0kWmo1VqVDMWVeIgFQunSDvwuCNymCkGATCpBqzTShwQfEd2AELUCUjkK1CeCEmDACRc8eVXbe4QzXFGmmwU2kSVDiZtB/lFj12oRRmobj8yLXgYWtB50qUIkzNjveKPFnJ0JQJWs2oL2G7U45O2Je/wCufxmtNrHf3BKFjOCuDtXjlD/infiP0o/VtI0CCWgHX3KHYnMcYv2sQ6r/APor9aH+nkGoKuDDyVULc+2kq8+auDM0dpthdlj/ALTSRDvH42q7Zh/tcWKwkA7imBRQzYVvD5W04N4P74oowcMg1CXfipYylwmToQohwahxv+VTB0ZCz6ha6XGPe22GkWbyZgeJIIjzJHzppmFijNtH3KQdjJj2XFMxmZpQCDJJ2iP1qZ8Q2PdXiwrpDYQF97WZ/OazJJesda02MyCkrNzUxi3KHaBXkJAiaeaKSxJKcoyrw9L/AJ1xNnRQBQ1Sdx+71TIFOdPNZiqoMWuEml8S/KzRM4WMPk12GqFKcJ3vb4ACsq1tJgXzz++tSoK8g3i1QpShfuPBHWqrl1DLMUHXMMpatRcb0mNtYhS0niDDbvlLg2NDLd6Vr1Cy6sFpbxTS0FRS84qJglMo8afOLjejXqChnYhXHsEnE4QrYUXFpbDZEQqe8SVeGTci9iROoTXfS7VRYc2wruGaWlouqQQ6GEAAiBq8cGVX1SlSSDFiDN6G7Q13ojQatZx9a0POakLBaToCk2UuDpkzIVJKl/jNXrsiiqa2VfaaCkjWVAxJChsOdQSQlMSLxvAuZAod0Ru2qF5xjwkFtoRMTbY+fQ3+dFigc8qkkoagKWwLk7+fPP41qxxtjFkpQuJ2CUvAVf8AUxhVyErxxQoZxrOS7qilGM9akY5vIrupTxmHlU/8g3kVX9OmnGjpXHGjkpEB5pBjP5fnVRjf/H7qep705ONi4BB9auMdWwUGG9CrQzp23smNtQmKv/yk3IeaB+ii7x4JXc8fUI1x6AVR/SOIcN68AobgYG60qLrylGSok+dLOme8242U01jWigF5LqhVhM8LixpVnD4wA+IfCmocWAe2PRBfCSNCr/fBV7xWk2ZjhYOiVyFunFKjEj0Fd17VBjKtfWm/vfJVT18fP3Qeqk5ey8Nv30rOXKvjvYP75TSmM+geKewH/YfBC0c1mFayrr5qVyb19TXLgnHaoXLoPZf7P/jI/wDbooR/b91fl4/squaf/kFe7/0sPRR9CE76lB2b/wCEzD/wz/5F1eTghx8Vq8u/4Fr+j/7aDJ9R8UeL6VMxu/8A1q/8xqrtvJXj380Jx3sq/rH/AKqqqxWeuaPe0v8AqP41rR/Qs931Jv3fX9Ku7gq803Ece/8AE0DEcPP3Vo+KhFLt3VyrjewrTj+gIDt1Wf3pLEfWjM2TahSlFWCgp1coTxXKqdVioSVwXJTUrklSFyts7e+mo/o80B+6c3Viocpq5DX/2Q==",
    "category": "curries",
    "description": "Freshly prepared Paneer Butter Masala from Sandhya Restaurant kitchen."
  },
  {
    "id": 7,
    "name": "Dal Makhani",
    "price": 249,
    "image": "https://www.cookwithmanali.com/wp-content/uploads/2019/04/Restaurant-Style-Dal-Makhani.jpg",
    "category": "curries",
    "description": "Freshly prepared Dal Makhani from Sandhya Restaurant kitchen."
  },
  {
    "id": 8,
    "name": "Chole Masala",
    "price": 229,
    "image": "https://www.cookwithmanali.com/wp-content/uploads/2023/04/Punjabi-Chole-Masala-500x500.jpg",
    "category": "curries",
    "description": "Freshly prepared Chole Masala from Sandhya Restaurant kitchen."
  },
  {
    "id": 9,
    "name": "Palak Paneer",
    "price": 229,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_I8R5TXGoabQURaYGUMiLe7d1GIcdpLdTLQ&s",
    "category": "curries",
    "description": "Freshly prepared Palak Paneer from Sandhya Restaurant kitchen."
  },
  {
    "id": 10,
    "name": "Chicken Tikka Masala",
    "price": 229,
    "image": "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/06/chicken-tikka-masala.jpg",
    "category": "curries",
    "description": "Freshly prepared Chicken Tikka Masala from Sandhya Restaurant kitchen."
  },
  {
    "id": 11,
    "name": "Samosa",
    "price": 129,
    "image": "https://static.toiimg.com/photo/61050397.cms",
    "category": "snacks",
    "description": "Freshly prepared Samosa from Sandhya Restaurant kitchen."
  },
  {
    "id": 12,
    "name": "Kachori",
    "price": 99,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqO0ieyO6huc4rGemgOq5lK5L-66kFU7BwPA&s",
    "category": "snacks",
    "description": "Freshly prepared Kachori from Sandhya Restaurant kitchen."
  },
  {
    "id": 13,
    "name": "Pani Puri",
    "price": 79,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5hQNVeecPsnSn7Pr-9KibCXlnN8KLj6FzuQ&s",
    "category": "snacks",
    "description": "Freshly prepared Pani Puri from Sandhya Restaurant kitchen."
  },
  {
    "id": 14,
    "name": "Bhel Puri",
    "price": 179,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoTLg5HeSJalWI5kEVU9vTGL2Hb6oPCmkFmw&s",
    "category": "snacks",
    "description": "Freshly prepared Bhel Puri from Sandhya Restaurant kitchen."
  },
  {
    "id": 15,
    "name": "Pav Bhaji",
    "price": 49,
    "image": "https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Instant-Pot-Mumbai-Pav-Bhaji-Recipe.jpg",
    "category": "snacks",
    "description": "Freshly prepared Pav Bhaji from Sandhya Restaurant kitchen."
  },
  {
    "id": 16,
    "name": "Butter Naan",
    "price": 249,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUfgxpJ2K5LP4y1yVHNbU32LZ7yEqUu0jTYA&s",
    "category": "breads",
    "description": "Freshly prepared Butter Naan from Sandhya Restaurant kitchen."
  },
  {
    "id": 17,
    "name": "Garlic Naan",
    "price": 69,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxu7EL4I3YHcOi5-VR1UrZZVm8DuDX1ljdGw&s",
    "category": "breads",
    "description": "Freshly prepared Garlic Naan from Sandhya Restaurant kitchen."
  },
  {
    "id": 18,
    "name": "Tandoori Roti",
    "price": 199,
    "image": "https://www.cookwithmanali.com/wp-content/uploads/2021/07/Tandoori-Roti-300x300.jpg",
    "category": "breads",
    "description": "Freshly prepared Tandoori Roti from Sandhya Restaurant kitchen."
  },
  {
    "id": 19,
    "name": "Lachha Paratha",
    "price": 69,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8JCQyqHRMsBXMJWqYrKnRJGUxm39MrRTjVQ&s",
    "category": "breads",
    "description": "Freshly prepared Lachha Paratha from Sandhya Restaurant kitchen."
  },
  {
    "id": 20,
    "name": "Roomali Roti",
    "price": 149,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7VtQoItm2gmPlSMCKaItUOWwKI3Ii1jqLBQ&s",
    "category": "breads",
    "description": "Freshly prepared Roomali Roti from Sandhya Restaurant kitchen."
  },
  {
    "id": 21,
    "name": "Gulab Jamun",
    "price": 49,
    "image": "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/11/gulab-jamun.webp",
    "category": "desserts",
    "description": "Freshly prepared Gulab Jamun from Sandhya Restaurant kitchen."
  },
  {
    "id": 22,
    "name": "Rasmalai",
    "price": 129,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVrggbTNDvmTQKGR5l5mTnPeMvLOlDxMHFMg&s",
    "category": "desserts",
    "description": "Freshly prepared Rasmalai from Sandhya Restaurant kitchen."
  },
  {
    "id": 23,
    "name": "Rasgulla",
    "price": 299,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPZw5edwhwaxvQAcTikUHSAt0UAgr7A0F6VA&s",
    "category": "desserts",
    "description": "Freshly prepared Rasgulla from Sandhya Restaurant kitchen."
  },
  {
    "id": 24,
    "name": "Kheer",
    "price": 299,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT43RrlU0L08XfvFesK-XXzAOsYPcriUf3GEw&s",
    "category": "desserts",
    "description": "Freshly prepared Kheer from Sandhya Restaurant kitchen."
  },
  {
    "id": 25,
    "name": "Jalebi",
    "price": 299,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKSnRxn3xZnd7W_9mkXNmBippHtW1u7iu4ow&s",
    "category": "desserts",
    "description": "Freshly prepared Jalebi from Sandhya Restaurant kitchen."
  },
  {
    "id": 26,
    "name": "Masala Chai",
    "price": 79,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8LMM6j0uSjpwGASdoFVtMLW_iojIyFp6ZfQ&s",
    "category": "beverages",
    "description": "Freshly prepared Masala Chai from Sandhya Restaurant kitchen."
  },
  {
    "id": 27,
    "name": "Sweet Lassi",
    "price": 49,
    "image": "https://www.sharmispassions.com/wp-content/uploads/2023/08/sweet-lassi5.jpg",
    "category": "beverages",
    "description": "Freshly prepared Sweet Lassi from Sandhya Restaurant kitchen."
  },
  {
    "id": 28,
    "name": "Salted Lassi",
    "price": 79,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDJl5giiE26PIj2AiDVRiVzwuqVuXVJX7MHg&s",
    "category": "beverages",
    "description": "Freshly prepared Salted Lassi from Sandhya Restaurant kitchen."
  },
  {
    "id": 29,
    "name": "Badam Milk",
    "price": 249,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGo8jttJx_y8Jl1MzmvvHoKLK8q9S1-ViPYQ&s",
    "category": "beverages",
    "description": "Freshly prepared Badam Milk from Sandhya Restaurant kitchen."
  },
  {
    "id": 30,
    "name": "Cold Coffee",
    "price": 79,
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7HN8AiGNBnRRMXEzB8ONaK4QJoAW0zhJ49A&s",
    "category": "beverages",
    "description": "Freshly prepared Cold Coffee from Sandhya Restaurant kitchen."
  }
];
