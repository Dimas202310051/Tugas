public class Servant {
    private String str, agl, luk, end, mp, np, skills;
    
    public String getStr() {
        return str;
    }
    public void setStr(String str) {
        this.str = str;
    }
    public String getAgl() {
        return agl;
    }
    public void setAgl(String agl) {
        this.agl = agl;
    }
    public String getLuk() {
        return luk;
    }
    public void setLuk(String luk) {
        this.luk = luk;
    }public String getEnd() {
        return end;
    }
    public void setEnd(String end) {
        this.end = end;
    }
    public String getMp() {
        return mp;
    }
    public void setMp(String mp) {
        this.mp = mp;
    }
    public String getNp() {
        return np;
    }
    public void setNp(String np) {
        this.np = np;
    }
    public String getSkills() {
        return skills;
    }
    public void setSkills(String skills) {
        this.skills = skills;
    }

    public void showstatus() {
        System.out.println("STR : " + getStr());
        System.out.println("AGL : " + getAgl());
        System.out.println("LUK : " + getLuk());
        System.out.println("END : " + getEnd());
        System.out.println("MP : " + getMp());
        System.out.println("NP : " + getNp());
        System.out.println("Skills : " + getSkills());
        System.out.println();
    }
}