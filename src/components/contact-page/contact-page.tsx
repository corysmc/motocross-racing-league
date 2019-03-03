import { Component, Prop } from "@stencil/core";

@Component({
  tag: "contact-page",
  styleUrl: "contact-page.css"
})
export class ContactPage {
  @Prop() success: boolean;
  render() {
    return [
      <scroll-header
        headerTitle="Contact Us"
        img="/assets/img/moto-tires.jpg"
      />,
      <ion-content>
        {this.success ? (
          <div>
            <ion-icon name="checkmark-circle" />
            Success
          </div>
        ) : (
          <form
            name="contact"
            method="POST"
            netlify-honeypot="bot-field"
            data-netlify="true"
          >
            <ion-list>
              <div class="hidden-form">
                <ion-item>
                  <ion-label>Don't fill this out if you're human: </ion-label>
                  <ion-input name="bot-field" />
                </ion-item>
              </div>
              <ion-item-divider>Name: </ion-item-divider>
              <ion-item>
                <ion-input name="name" />
              </ion-item>
              <ion-item-divider>Email: </ion-item-divider>
              <ion-item>
                <ion-input name="email" />
              </ion-item>
              <ion-item-divider>Message: </ion-item-divider>
              <ion-item>
                <ion-textarea name="message" />
              </ion-item>
              <div class="submit-wrapper">
                <ion-button type="submit">Send</ion-button>
              </div>
            </ion-list>
          </form>
        )}
      </ion-content>
    ];
  }
}
