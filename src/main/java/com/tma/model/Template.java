package com.tma.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "Template")
public class Template {

	@Id
	private String id;
	private String name;
	private int diskSize;
	private int cpuUsed;
	private int ramSize;
	private String os;

	public Template() {
	}

	public Template(String id, String name, int diskSize, int cpuUsed,
			int ramSize, String os) {
		this.id = id;
		this.name = name;
		this.diskSize = diskSize;
		this.cpuUsed = cpuUsed;
		this.ramSize = ramSize;
		this.os = os;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getDiskSize() {
		return diskSize;
	}

	public void setDiskSize(int diskSize) {
		this.diskSize = diskSize;
	}

	public int getCpuUsed() {
		return cpuUsed;
	}

	public void setCpuUsed(int cpuUsed) {
		this.cpuUsed = cpuUsed;
	}

	public int getRamSize() {
		return ramSize;
	}

	public void setRamSize(int ramSize) {
		this.ramSize = ramSize;
	}

	public String getOs() {
		return os;
	}

	public void setOs(String os) {
		this.os = os;
	}

	@Override
	public String toString() {
		return "Template [id=" + id + ", name=" + name + ", diskSize="
				+ diskSize + ", cpuUsed=" + cpuUsed + ", ramSize=" + ramSize
				+ ", os=" + os + "]";
	}

}
