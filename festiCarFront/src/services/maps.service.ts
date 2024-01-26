import { Subject } from "rxjs";

export class GoogleMapService {
    public placeSubject: Subject<google.maps.places.PlaceResult> = new Subject<google.maps.places.PlaceResult>();
    public placeObservable = this.placeSubject.asObservable();
    constructor() { }
    getPlaceAutocomplete(addressText: any): any {
      const autocomplete = new google.maps.places.Autocomplete(
      addressText.nativeElement,{ componentRestrictions: { country:
      ['FR'] }, types:     ['establishment', 'geocode'] });
      google.maps.event.addListener(autocomplete,'place_changed',() => {
          const place = autocomplete.getPlace();                 
          this.placeSubject.next(place);
      });
    }
    getAddrComponent(place: any, componentTemplate: any): any {
      let result;
      for (const component of place.address_components) {
        const addressType = component.types[0];
        if (componentTemplate[addressType]) {
         result = component[componentTemplate[addressType]];
         return result;
        }
      }
    }
    getStreetNumber(place: any): any {
      const COMPONENT_TEMPLATE = { street_number: 'short_name' };
      return this.getAddrComponent(place, COMPONENT_TEMPLATE);
    }
    getStreet(place: any): any {
      const COMPONENT_TEMPLATE = { route: 'long_name' };
      return this.getAddrComponent(place, COMPONENT_TEMPLATE);
    }
    getCity(place: any): any {
      const COMPONENT_TEMPLATE = { locality: 'long_name' };
      return this.getAddrComponent(place, COMPONENT_TEMPLATE);
    }
    getState(place: any): any {
      const COMPONENT_TEMPLATE = { administrative_area_level_1:  'short_name' };
      return this.getAddrComponent(place, COMPONENT_TEMPLATE);
    }
    getDistrict(place: any): any {
      const COMPONENT_TEMPLATE = { administrative_area_level_2:      
      'short_name' };
      return this.getAddrComponent(place, COMPONENT_TEMPLATE);
    }
    getCountryShort(place: any): any {
      const COMPONENT_TEMPLATE = { country: 'short_name' };
      return this.getAddrComponent(place, COMPONENT_TEMPLATE);
    }
    getCountry(place: any): any {
      const COMPONENT_TEMPLATE = { country: 'long_name' };
      return this.getAddrComponent(place, COMPONENT_TEMPLATE);
    }
    getPostCode(place: any): any {
      const COMPONENT_TEMPLATE = { postal_code: 'long_name' };
      return this.getAddrComponent(place, COMPONENT_TEMPLATE);
    }
    getPhone(place: any): any {
      const COMPONENT_TEMPLATE = { formatted_phone_number: 
      'formatted_phone_number' };
      return this.getAddrComponent(place, COMPONENT_TEMPLATE);
    }
    }