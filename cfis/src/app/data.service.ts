import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  private baseUrl = 'https://localhost:44343/api/feedback';
  @Output() loginEventEmitter: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    let url = this.baseUrl + '/products'
    return this.http.get<any>(url);
    // return this.http.get<Tutorial[]>(baseUrl, {'custom':headers});
  }

  get(id: any): Observable<any> {
    let url = this.baseUrl + '/products'
    return this.http.get<any>(url);
   // return this.http.get(`${this.baseUrl}/${id}`);
    // return this.http.get(`${baseUrl}/${id}`, {'headers':headers});
  }

  create(data: any): Observable<any> {
    return this.http.post(this.baseUrl, data);
    // return this.http.post(baseUrl, data,  {'headers':headers});
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
    // return this.http.put(`${baseUrl}/${id}` , data, {'headers':headers});
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
    // return this.http.delete(`${baseUrl}/${id}`, {'headers':headers});
  }

  deleteAll(): Observable<any> {
    return this.http.delete(this.baseUrl);
    // return this.http.delete(baseUrl, {'headers':headers});
  }

  getAll_static() {
    return this.productList;
  }

  get_static(id: any) {
    return this.productList.find(x => x.id == id);
  }

  emitLoginEvent() {
    this.loginEventEmitter.emit();
  }

  getLoginEmitter() {
    return this.loginEventEmitter;
  }

  productList = [
    {
      id: 1,
      productName: "Cannon 50mm Lens",
      productDescription: "The EF 50mm lenses are a group of normal prime lenses made by Canon that share the same focal length. These lenses are based on the classic double-Gauss lens,[1] with the f/1.8 being a standard six-element double-Gauss with an air gap and powers between element 2 and 3 and its faster cousins adding additional elements.",
      productImg: "https://images.unsplash.com/photo-1586170736685-fc1fcee36d2f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA0fHxnYWRnZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      productReviews:
        [
          { id: 1, emailAddress: "abc1@example.com", contactNumber: "12345678", review: "This is a good product" },
          { id: 2, emailAddress: "abc2@example.com", contactNumber: "12345678", review: "This is a good product" },
          { id: 3, emailAddress: "abc3@example.com", contactNumber: "12345678", review: "This is a good product" },
          { id: 4, emailAddress: "abc4@example.com", contactNumber: "12345678", review: "This is a good product" },
          { id: 5, emailAddress: "abc5@example.com", contactNumber: "12345678", review: "This is a good product" }
        ]

    },
    {
      id: 2,
      productName: "Cannon DSLR",
      productDescription: "The Canon EOS 800D, known in the Americas as the EOS Rebel T7i and in Japan as the EOS Kiss X9i, is a digital single-lens reflex camera announced by Canon on February 14, 2017. It is the successor to the EOS 750D (Rebel T6i) and the predecessor to the EOS 850D (Rebel T8i)",

      productImg: "https://images.unsplash.com/photo-1495707902641-75cac588d2e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZHNscnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      productReviews:
        [
          { id: 1, emailAddress: "abc1@example.com", contactNumber: "12345678", review: "This is a good product" },
          { id: 2, emailAddress: "abc2@example.com", contactNumber: "12345678", review: "This is a good product" },
          { id: 3, emailAddress: "abc3@example.com", contactNumber: "12345678", review: "This is a good product" },
          { id: 4, emailAddress: "abc4@example.com", contactNumber: "12345678", review: "This is a good product" },
          { id: 5, emailAddress: "abc5@example.com", contactNumber: "12345678", review: "This is a good product" }
        ]
    },
    {
      id: 3,
      productName: "Apple Watch",
      productDescription: "The Apple Watch operates primarily in conjunction with the user's iPhone for functions such as configuring the watch and syncing data with iPhone apps, but can separately connect to a Wi-Fi network for some data-reliant purposes, including basic communications and audio streaming",

      productImg: "https://images.unsplash.com/photo-1589814487710-7f5991d5f8a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGFwcGxlJTIwd2F0Y2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      productReviews:
        [
          { id: 1, emailAddress: "abc1@example.com", contactNumber: "12345678", review: "This is a good product" },
          { id: 2, emailAddress: "abc2@example.com", contactNumber: "12345678", review: "This is a good product" },
          { id: 3, emailAddress: "abc3@example.com", contactNumber: "12345678", review: "This is a good product" },
          { id: 4, emailAddress: "abc4@example.com", contactNumber: "12345678", review: "This is a good product" },
          { id: 5, emailAddress: "abc5@example.com", contactNumber: "12345678", review: "This is a good product" }
        ]
    },
    {
      id: 4,
      productName: "Samsung Z fold ",
      productDescription: "The Samsung Galaxy Z Fold 3  is a foldable smartphone that is part of the Samsung Galaxy Z series. It was revealed by Samsung Electronics on August 11, 2021 at the Samsung Unpacked event alongside the Z Flip 3. It is the successor to the Samsung Galaxy Z Fold 2.",
      productImg: "https://images.unsplash.com/photo-1628744398863-1877b197f2cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OTB8fGdhZGdldHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      productReviews:
        [
          { id: 1, emailAddress: "abc1@example.com", contactNumber: "12345678", review: "This is a good product" },
          { id: 2, emailAddress: "abc2@example.com", contactNumber: "12345678", review: "This is a good product" },
          { id: 3, emailAddress: "abc3@example.com", contactNumber: "12345678", review: "This is a good product" },
          { id: 4, emailAddress: "abc4@example.com", contactNumber: "12345678", review: "This is a good product" },
          { id: 5, emailAddress: "abc5@example.com", contactNumber: "12345678", review: "This is a good product" }
        ]
    },
    {
      id: 5,
      productName: "iPhone 12 ",
      productDescription: "The iPhone has a user interface built around a multi-touch screen. It connects to cellular networks or Wi-Fi, and can make calls, browse the web, take pictures, play music and send and receive emails and text messages. Since the iPhone's launch further features have been added, including larger screen sizes, shooting video, waterproofing, the ability to install third-party mobile apps through an app store, and many accessibility features.",
      productImg: "https://images.unsplash.com/photo-1616410072514-e92114cf1a88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTE2fHxnYWRnZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      productReviews:
        [
          { id: 1, emailAddress: "abc1@example.com", contactNumber: "12345678", review: "This is a good product" },
          { id: 2, emailAddress: "abc2@example.com", contactNumber: "12345678", review: "This is a good product" },
          { id: 3, emailAddress: "abc3@example.com", contactNumber: "12345678", review: "This is a good product" },
          { id: 4, emailAddress: "abc4@example.com", contactNumber: "12345678", review: "This is a good product" },
          { id: 5, emailAddress: "abc5@example.com", contactNumber: "12345678", review: "This is a good product" }
        ]
    },
    {
      id: 6,
      productName: "iPhone 12 Pro",
      productDescription: "The iPhone has a user interface built around a multi-touch screen. It connects to cellular networks or Wi-Fi, and can make calls, browse the web, take pictures, play music and send and receive emails and text messages. Since the iPhone's launch further features have been added, including larger screen sizes, shooting video, waterproofing, the ability to install third-party mobile apps through an app store, and many accessibility features.",

      productImg: "https://images.unsplash.com/photo-1637496652486-99d500bcdd18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzY5fHxnYWRnZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      productReviews:
        [
          { id: 1, emailAddress: "abc1@example.com", contactNumber: "12345678", review: "This is a good product" },
          { id: 2, emailAddress: "abc2@example.com", contactNumber: "12345678", review: "This is a good product" },
          { id: 3, emailAddress: "abc3@example.com", contactNumber: "12345678", review: "This is a good product" },
          { id: 4, emailAddress: "abc4@example.com", contactNumber: "12345678", review: "This is a good product" },
          { id: 5, emailAddress: "abc5@example.com", contactNumber: "12345678", review: "This is a good product" }
        ]
    },
    {
      id: 7,
      productName: "iPad Pro",
      productDescription: "The fifth generation of iPad Pro was announced on April 20, 2021, with the same design and screen sizes as the previous generation. It includes the Apple M1 chip, 5G connectivity, Thunderbolt 3/USB 4 connectivity (up to 40 Gbit/s), external display output up to 6K resolution, 8 or 16 GB of RAM (16 GB is only available for 1 TB and 2 TB models), and, on the 12.9 variant, an XDR display with mini-LEDs marketed as Liquid Retina XDR",
      productImg: "https://images.unsplash.com/photo-1587033411391-5d9e51cce126?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjExfHxnYWRnZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      productReviews:
        [
          { id: 1, emailAddress: "abc1@example.com", contactNumber: "12345678", review: "This is a good product" },
          { id: 2, emailAddress: "abc2@example.com", contactNumber: "12345678", review: "This is a good product" },
          { id: 3, emailAddress: "abc3@example.com", contactNumber: "12345678", review: "This is a good product" },
          { id: 4, emailAddress: "abc4@example.com", contactNumber: "12345678", review: "This is a good product" },
          { id: 5, emailAddress: "abc5@example.com", contactNumber: "12345678", review: "This is a good product" }
        ]
    },
    {
      id: 8,
      productName: "Mac Book Pro",
      productDescription: "The fifth-generation MacBook Pro was released in October 2021 in 14- and 16-inch sizes. Powered by either M1 Pro or M1 Max chips, they are the first to be available only with an Apple silicon system on a chip.",
      productImg: "https://images.unsplash.com/photo-1569770218135-bea267ed7e84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjE4fHxnYWRnZXR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      productReviews:
        [
          { id: 1, emailAddress: "abc1@example.com", contactNumber: "12345678", review: "This is a good product" },
          { id: 2, emailAddress: "abc2@example.com", contactNumber: "12345678", review: "This is a good product" },
          { id: 3, emailAddress: "abc3@example.com", contactNumber: "12345678", review: "This is a good product" },
          { id: 4, emailAddress: "abc4@example.com", contactNumber: "12345678", review: "This is a good product" },
          { id: 5, emailAddress: "abc5@example.com", contactNumber: "12345678", review: "This is a good product" }
        ]
    },
    {
      id: 9,
      productName: "Mac",
      productDescription: "The new MacBook Pros were revealed on October 18, 2021,[159] featuring a design similar to Apple’s Titanium PowerBook G4s and 2012 Retina MacBook Pros, bringing back the MagSafe, HDMI, and SD card ports, in addition to 3 Thunderbolt 4 USB-C ports and a high-impedance headphone jack. The displays now come in 14” and 16” configurations, featuring a mini-LED display with a 120Hz variable refresh rate screen.[160] They sport either a M1 Pro or M1 Max chip, with up to 70% faster CPU performance than the M1, according to Apple.",
      productImg: "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG1hY3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      productReviews:
        [
          { id: 1, emailAddress: "abc@example.com", contactNumber: "12345678", review: "This is a good product" },
          { id: 2, emailAddress: "abc@example.com", contactNumber: "12345678", review: "This is a good product" },
          { id: 3, emailAddress: "abc@example.com", contactNumber: "12345678", review: "This is a good product" },
          { id: 4, emailAddress: "abc@example.com", contactNumber: "12345678", review: "This is a good product" },
          { id: 5, emailAddress: "abc@example.com", contactNumber: "12345678", review: "This is a good product" }
        ]
    },
    {
      id: 10,
      productName: "OnePlus 8",
      productDescription: "Both the OnePlus 8 and 8 Pro use the Snapdragon 865 processor with the Adreno 650 GPU, with either 128 or 256 GB of non-expandable UFS 3.0 storage. Both have 8 GB or 12 GB of RAM; the 8 has LPDDR4X RAM and the 8 Pro has faster, more efficient LPDDR5 RAM. Both have stereo speakers with active noise cancellation; there is no audio jack.",
      productImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/OnePlus_8_Pro.jpg/375px-OnePlus_8_Pro.jpg",
      productReviews:
        [
          { id: 1, emailAddress: "abc@example.com", contactNumber: "12345678", review: "This is a good product." },
          { id: 2, emailAddress: "abc@example.com", contactNumber: "12345678", review: "This is a good product" },
          { id: 3, emailAddress: "abc@example.com", contactNumber: "12345678", review: "This is a good product" },
          { id: 4, emailAddress: "abc@example.com", contactNumber: "12345678", review: "This is a good product" },
          { id: 5, emailAddress: "abc@example.com", contactNumber: "12345678", review: "This is a good product" }
        ]
    },
    {
      id: 11,
      productName: "Air Pods Pro",
      productDescription: "They are Apple's mid-range wireless headphones, sold alongside the base-level AirPods and highest-end AirPods Max. AirPods Pro use the H1 processor found in second-generation AirPods, but add active noise cancellation, transparency mode, automated frequency profile setting, IPX4 water resistance, a charging case with wireless charging, and interchangeable silicone tips.",
      productImg: "https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGFpcnBvZHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      productReviews:
        [
          { id: 1, emailAddress: "abc@example.com", contactNumber: "12345678", review: "This is a good product" },
          { id: 2, emailAddress: "abc@example.com", contactNumber: "12345678", review: "This is a good product" },
          { id: 3, emailAddress: "abc@example.com", contactNumber: "12345678", review: "This is a good product" },
          { id: 4, emailAddress: "abc@example.com", contactNumber: "12345678", review: "This is a good product" },
          { id: 5, emailAddress: "abc@example.com", contactNumber: "12345678", review: "This is a good product" }
        ]
    },
    {
      id: 12,
      productName: "Google Nest",
      productDescription: "It is a variant of Google Home with the same overall functionality, but in a smaller pebble-like form factor around 4 inches (10 cm) in diameter, with a fabric top that its white-colored status lights shine through. It has a mute switch rather than a mute button, and uses a micro USB connection for power. It is available in the colors aqua, chalk, charcoal, and coral.",
      productImg: "https://images.unsplash.com/photo-1578510879285-4aeb67eec1d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aG9tZSUyMHBvZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      productReviews:
        [
          { id: 1, emailAddress: "abc@example.com", contactNumber: "12345678", review: "This is a good product" },
          { id: 2, emailAddress: "abc@example.com", contactNumber: "12345678", review: "This is a good product" },
          { id: 3, emailAddress: "abc@example.com", contactNumber: "12345678", review: "This is a good product" },
          { id: 4, emailAddress: "abc@example.com", contactNumber: "12345678", review: "This is a good product" },
          { id: 5, emailAddress: "abc@example.com", contactNumber: "12345678", review: "This is a good product" }
        ]
    }
  ]


}
