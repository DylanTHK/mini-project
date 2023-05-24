package com.server.fitnessapp.models.scheduledWorkout;

public class SelectedWorkout {
    String name;
    Boolean selected;
    Integer quantity;
    
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public Boolean getSelected() {
        return selected;
    }
    public void setSelected(Boolean selected) {
        this.selected = selected;
    }
    public Integer getQuantity() {
        return quantity;
    }
    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    @Override
    public String toString() {
        return "selectedWorkout [name=" + name + ", selected=" + selected + ", quantity=" + quantity + "]";
    }

    
    

}
