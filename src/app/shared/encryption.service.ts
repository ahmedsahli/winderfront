import { Injectable } from '@angular/core';
import {AES , enc} from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class EncryptionService {

  constructor() { }
  private encryptionKey = 'yahya';

  encrypt(data: any): string {
    return AES.encrypt(JSON.stringify(data), this.encryptionKey).toString();
  }

  decrypt(encryptedData: string): any {
    const bytes = AES.decrypt(encryptedData, this.encryptionKey);
    return JSON.parse(bytes.toString(enc.Utf8));
  }


/*
  test(data: any): string {

    const v1 : string = this.encrypt(data) ;

    return AES.decrypt(v1,this.encryptionKey).toString();
  }*/











}


