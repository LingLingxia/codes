public enum Size {
   // SMALL,MEDIUM,LARGE,
    SMALL("s"),MEDIUM("m"),LARGE("l");
    private String attribute;
    private Size(String str){
      this.attribute = str;
    }

    public String getAttribute() {
        return attribute;
    }
}
