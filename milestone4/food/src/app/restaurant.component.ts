import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { restaurants } from './foodmap';
import { of, Subscription } from 'rxjs';
import { delay, tap } from 'rxjs/operators';


declare const google: any;

@Component({
  selector: 'app-restaurants-root',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})

export class RestaurantComponent implements OnInit {
  @ViewChild('gmap') gmapElement: any;
  map: any;
  ordering: boolean = false;
  checkout: boolean = false;
  processing: boolean;
  processingSubscription: Subscription;

  restaurants: any[];
  selectedRestaurant: any;
  filteredRestaurants: any[];
  tags: string[] = [];
  sortBy: string = 'No sort';
  sorts: string[] = ['No sort', 'Delivery Time', 'Price', 'Rating'];
  selectedItem: any;
  cart: any[] = [];
  cartTotal: number;

  constructor() {
  }

  ngOnInit() {
    this.restaurants = restaurants; //Global lol
    this.loadRestaurants();
    this.initMap();
  }

  @Input()
  set name(name: string) {
    console.log(name);
  }

  loadRestaurants() {
    this.filteredRestaurants = [];
    for (let i = 0; i < this.restaurants.length; i++) {
      var valid = true;
      for (let j = 0; j < this.tags.length; j++) {
        if (this.restaurants[i].tags.indexOf(this.tags[j]) == -1) {
          valid = false;
        }
      }
      if (!valid) continue;
      this.filteredRestaurants.push(this.restaurants[i]);

      //Sort  
      if (this.sortBy == 'Delivery Time') {
        this.filteredRestaurants.sort(function (a, b) {
          return a.deliveryTime - b.deliveryTime;
        });
      }
      else if (this.sortBy == 'Price') {
        this.filteredRestaurants.sort(function (a, b) {
          return a.money.length - b.money.length;
        });
      }
      else if (this.sortBy == 'Rating') {
        this.filteredRestaurants.sort(function (a, b) {
          return a.rating - b.rating;
        });
      }
    }

  }

  validItem(item) {
    var valid = true;
    for (let j = 0; j < this.tags.length; j++) {
      if (item.tags.indexOf(this.tags[j]) == -1) {
        valid = false;
      }
    }
    return valid;
  }

  loadMenu(restaurant: any) {
    if (this.cart.length > 0) return;
    this.selectedRestaurant = restaurant;
  }

  changeSort() {
    console.log(this.sortBy);
    this.loadRestaurants();
  }

  toggleTag(tag: string) {
    if (this.tags.indexOf(tag) == -1) {
      this.tags.push(tag);
    }
    else {
      this.tags.splice(this.tags.indexOf(tag), 1);
    }
    this.loadRestaurants();
  }

  initMap() {
    // The location of Uluru
    var uluru = {lat: 43.2609, lng: -79.9192};
    // The map, centered at Uluru
    this.map = new google.maps.Map(
      this.gmapElement.nativeElement, {
        zoom: 17, center: uluru, disableDefaultUI: true,
        styles: [
          {
            'elementType': 'geometry',
            'stylers': [
              {
                'color': '#1d2c4d'
              }
            ]
          },
          {
            'elementType': 'labels.text.fill',
            'stylers': [
              {
                'color': '#8ec3b9'
              }
            ]
          },
          {
            'elementType': 'labels.text.stroke',
            'stylers': [
              {
                'color': '#1a3646'
              }
            ]
          },
          {
            'featureType': 'administrative',
            'elementType': 'geometry',
            'stylers': [
              {
                'visibility': 'off'
              }
            ]
          },
          {
            'featureType': 'administrative.country',
            'elementType': 'geometry.stroke',
            'stylers': [
              {
                'color': '#4b6878'
              }
            ]
          },
          {
            'featureType': 'administrative.land_parcel',
            'elementType': 'labels',
            'stylers': [
              {
                'visibility': 'off'
              }
            ]
          },
          {
            'featureType': 'administrative.land_parcel',
            'elementType': 'labels.text.fill',
            'stylers': [
              {
                'color': '#64779e'
              }
            ]
          },
          {
            'featureType': 'administrative.province',
            'elementType': 'geometry.stroke',
            'stylers': [
              {
                'color': '#4b6878'
              }
            ]
          },
          {
            'featureType': 'landscape.man_made',
            'elementType': 'geometry.stroke',
            'stylers': [
              {
                'color': '#334e87'
              }
            ]
          },
          {
            'featureType': 'landscape.natural',
            'elementType': 'geometry',
            'stylers': [
              {
                'color': '#023e58'
              }
            ]
          },
          {
            'featureType': 'poi',
            'stylers': [
              {
                'visibility': 'off'
              }
            ]
          },
          {
            'featureType': 'poi',
            'elementType': 'geometry',
            'stylers': [
              {
                'color': '#283d6a'
              }
            ]
          },
          {
            'featureType': 'poi',
            'elementType': 'labels.text',
            'stylers': [
              {
                'visibility': 'off'
              }
            ]
          },
          {
            'featureType': 'poi',
            'elementType': 'labels.text.fill',
            'stylers': [
              {
                'color': '#6f9ba5'
              }
            ]
          },
          {
            'featureType': 'poi',
            'elementType': 'labels.text.stroke',
            'stylers': [
              {
                'color': '#1d2c4d'
              }
            ]
          },
          {
            'featureType': 'poi.park',
            'elementType': 'geometry.fill',
            'stylers': [
              {
                'color': '#023e58'
              }
            ]
          },
          {
            'featureType': 'poi.park',
            'elementType': 'labels.text.fill',
            'stylers': [
              {
                'color': '#3C7680'
              }
            ]
          },
          {
            'featureType': 'road',
            'elementType': 'geometry',
            'stylers': [
              {
                'color': '#304a7d'
              }
            ]
          },
          {
            'featureType': 'road',
            'elementType': 'labels.icon',
            'stylers': [
              {
                'visibility': 'off'
              }
            ]
          },
          {
            'featureType': 'road',
            'elementType': 'labels.text.fill',
            'stylers': [
              {
                'color': '#98a5be'
              }
            ]
          },
          {
            'featureType': 'road',
            'elementType': 'labels.text.stroke',
            'stylers': [
              {
                'color': '#1d2c4d'
              }
            ]
          },
          {
            'featureType': 'road.highway',
            'elementType': 'geometry',
            'stylers': [
              {
                'color': '#2c6675'
              }
            ]
          },
          {
            'featureType': 'road.highway',
            'elementType': 'geometry.stroke',
            'stylers': [
              {
                'color': '#255763'
              }
            ]
          },
          {
            'featureType': 'road.highway',
            'elementType': 'labels.text.fill',
            'stylers': [
              {
                'color': '#b0d5ce'
              }
            ]
          },
          {
            'featureType': 'road.highway',
            'elementType': 'labels.text.stroke',
            'stylers': [
              {
                'color': '#023e58'
              }
            ]
          },
          {
            'featureType': 'road.local',
            'elementType': 'labels',
            'stylers': [
              {
                'visibility': 'off'
              }
            ]
          },
          {
            'featureType': 'transit',
            'stylers': [
              {
                'visibility': 'off'
              }
            ]
          },
          {
            'featureType': 'transit',
            'elementType': 'labels.text.fill',
            'stylers': [
              {
                'color': '#98a5be'
              }
            ]
          },
          {
            'featureType': 'transit',
            'elementType': 'labels.text.stroke',
            'stylers': [
              {
                'color': '#1d2c4d'
              }
            ]
          },
          {
            'featureType': 'transit.line',
            'elementType': 'geometry.fill',
            'stylers': [
              {
                'color': '#283d6a'
              }
            ]
          },
          {
            'featureType': 'transit.station',
            'elementType': 'geometry',
            'stylers': [
              {
                'color': '#3a4762'
              }
            ]
          },
          {
            'featureType': 'water',
            'elementType': 'geometry',
            'stylers': [
              {
                'color': '#0e1626'
              }
            ]
          },
          {
            'featureType': 'water',
            'elementType': 'labels.text.fill',
            'stylers': [
              {
                'color': '#4e6d70'
              }
            ]
          }
        ]
      });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({
      position: uluru, map: this.map,
      icon: 'https://upload.wikimedia.org/wikipedia/commons/f/f2/Creative-Tail-People-women-skintone2.svg'
    });
    this.addRestaurantsToMap();
  }

  addRestaurantsToMap() {
    for (var i = 0; i < this.restaurants.length; i++) {
      this.createRestaurantMarker(this.restaurants[i]);
    }
  }

  // creates a marker with a closure for the event functions.
  createRestaurantMarker(restaurant: any) {
    var marker = new google.maps.Marker({
      position: restaurant.latLng,
      map: this.map,
      label: {text: restaurant.name, color: 'white'}
    });
    google.maps.event.addListener(marker, 'mouseover', function (evt) {
      var label = this.getLabel();
      label.color = 'black';
      this.setLabel(label);
    });
    google.maps.event.addListener(marker, 'mouseout', function (evt) {
      var label = this.getLabel();
      label.color = 'white';
      this.setLabel(label);
    });
    return marker;
  }

  selectItem(item) {
    this.selectedItem = item;
    this.selectedItem.notes = '';
    this.selectedItem.finalPrice = 0.00;
    if (this.selectedItem.customize) {
      for (var i = 0; i < this.selectedItem.customize.length; i++) {
        if (this.selectedItem.customize[i].required) {
          this.selectedItem.customize[i].selected = this.selectedItem.customize[i].options[0];
        }
        else {
          for (var j = 0; j < this.selectedItem.customize[i].options.length; j++) {
            if (this.selectedItem.customize[i].options[j].enabled == undefined)
              this.selectedItem.customize[i].options[j].enabled = false;
          }
        }
      }
    }
    this.updateItem();
  }


  startCheckout(checkoutBtn) {
    let html = checkoutBtn.innerHTML;
    if (this.checkout && !this.processing) {
      this.processing = true;
      if (this.processingSubscription) {
        this.processingSubscription.unsubscribe();
      }
      checkoutBtn.innerHTML =
        `<h4>
            Processing  <i class="fa fa-spinner fa-spin" style="font-size:24px"></i>
        </h4>`;
      let complete = () => {
        checkoutBtn.innerHTML =
          `<h4>
                <i class="fas fa-check"></i> Order Complete! <i class="fa fa-spinner fa-spin" style="font-size:24px"></i>
          </h4>`;
      };

      let done = () => {
        checkoutBtn.innerHTML = html;
        this.cart = [];
        this.ordering = false;
        this.checkout = false;
        this.selectedRestaurant = null;
        this.processing = false;
      };

      this.processingSubscription = of('').pipe(
        delay(2000),
        tap(() => {
          complete();
        }),
        delay(1000),
        tap(() => {
          done();
        }),
      ).subscribe(() => console.log('Done'));

    } else {
      this.checkout = true;
    }
  }

  getSign(num) {
    if (num < 0)
      return '-';
    else return '+';
  }

  abs(num) {
    return Math.abs(num);
  }

  itemIsValid() {
    return true;
  }

  updateItem() {
    this.selectedItem.finalPrice = this.selectedItem.basePrice;
    if (this.selectedItem.customize) {
      for (var i = 0; i < this.selectedItem.customize.length; i++) {
        if (this.selectedItem.customize[i].required) {
          this.selectedItem.finalPrice += this.selectedItem.customize[i].selected.price;
        }
        else {
          for (var j = 0; j < this.selectedItem.customize[i].options.length; j++) {
            if (this.selectedItem.customize[i].options[j].enabled)
              this.selectedItem.finalPrice += this.selectedItem.customize[i].options[j].price;
          }
        }
      }
    }
  }

  editCart(i) {
    var item = this.cart[i];
    this.cart.splice(i, 1);
    this.selectedItem = item;
  }

  addSelectedToCart() {
    this.cart.push(this.selectedItem);
    this.selectedItem = null;
    this.cartTotal = this.selectedRestaurant.deliveryFee;
    for (var i = 0; i < this.cart.length; i++) {
      this.cartTotal += this.cart[i].finalPrice;
    }
  }

  check() {
    console.log(this.selectedItem.customize);
  }

}
