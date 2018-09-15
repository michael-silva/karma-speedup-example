import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class BannerService {
    constructor(private http: HttpClient) { }

    getAlbums() {
        return this.http.get<any[]>(`https://jsonplaceholder.typicode.com/albums`);
    }

}
