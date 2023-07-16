AFRAME.registerComponent("tour", {
    init: function () {
      this.placesContainer = this.el;
      this.createCards();
    },
  
    createCards: function () {
      const thumbNailsRef = [
        {
          id: "bat-man",
          title: "Bat Man",
          url: "./assets/thumbnails/bm.jpg",
        },
        {
          id: "captain-america",
          title: "Captain America",
          url: "./assets/thumbnails/cam.jpg",
        },
  
        {
          id: "super-man",
          title: "Super Man",
          url: "./assets/thumbnails/sm.jpg",
        },
        {
          id: "spider-man",
          title: "Spider Man",
          url: "./assets/thumbnails/spm.jpg",
        },
      ];
      let previousXPosition = -60;
  
      for (var item of thumbNailsRef) {
        const posX = previousXPosition + 25;
        const posY = 10;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        previousXPosition = posX;
  
        // Border Element
        const borderEl = this.createBorder(position, item.id);
  
        // Thumbnail Element
        const Thumbnail = this.createThumbnail(item);
        borderEl.appendChild(Thumbnail);
  
        // Title Text Element
        const TitleEL = this.createTitle(position, item);
        borderEl.appendChild(TitleEL);
  
        this.placesContainer.appendChild(borderEl);
      }
    },
  
    createBorder: function (position, id) {
      const entityEL = document.createElement("a-entity");
      entityEL.setAttribute("id", id);
      entityEL.setAttribute("visible", true);
      entityEL.setAttribute("geometry", {
        primitive: "ring",
        radiusInner: 9,
        radiusOuter: 10,
      });
      entityEL.setAttribute("position", position);
      entityEL.setAttribute("material", { color: "#00bcd4", opacity: 0.4 });
      return entityEL;
    },
  
    createThumbnail: function (item) {
      const entityEL = document.createElement("a-entity");
      entityEL.setAttribute("visible", true);
      entityEL.setAttribute("geometry", { primitive: "circle", radius: 9 });
      entityEL.setAttribute("material", { src: item.url });
      return entityEL;
    },
  
    createTitle: function (position, item) {
      const entityEL = document.createElement("a-entity");
      entityEL.setAttribute("text", {
        font: "dejavu",
        align: "center",
        width: 60,
        color: "#0F184E",
        value: item.title,
      });
      const elPosition = position;
      elPosition.y = -20;
      entityEL.setAttribute("position", elPosition);
      entityEL.setAttribute("visible", true);
      return entityEL;
    },
  });
  