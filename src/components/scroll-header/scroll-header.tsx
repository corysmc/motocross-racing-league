import { Component, Prop, State, Listen } from "@stencil/core";
import { ScrollDetail } from "@ionic/core";

@Component({
  tag: "scroll-header",
  styleUrl: "scroll-header.css"
})
export class ScrollHeader {
  @Prop() headerTitle: string;
  @Prop() defaultHref: string;
  @Prop() img: string;

  @Listen("window:scroll")
  handleScroll(ev) {
    console.log("the body was scrolled", ev);
  }

  @State() headerHeight: number = 200;

  scrollHandler(e: CustomEvent<ScrollDetail>) {
    console.log("de", e.detail.scrollTop);
    const scroll = e.detail.scrollTop;
    if (scroll > 200) {
      this.headerHeight = 0;
    } else {
      this.headerHeight = 200 - scroll;
    }
  }

  render() {
    return (
      <ion-header style={{ background: "var(--ion-color-dark)" }}>
        <div
          style={{
            background: `url('${this.img}') no-repeat center`,
            backgroundSize: "cover",
            textAlign: "center",
            color: "#fff",
            position: "absolute",
            top: "0",
            right: "0",
            bottom: "0",
            left: "0",
            opacity: ".4"
          }}
        />
        <ion-toolbar
          mode="md"
          style={{
            "--background": "transparent",
            minHeight: `${this.headerHeight}px`,
            color: "#fff",
            display: "flex",
            textAlign: "center"
          }}
        >
          {this.defaultHref ? (
            <ion-buttons slot="start">
              <ion-back-button defaultHref={this.defaultHref} />
            </ion-buttons>
          ) : null}
          <ion-title>{this.headerTitle}</ion-title>
        </ion-toolbar>
      </ion-header>
    );
  }
}
