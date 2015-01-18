package com.tma.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection="Server")
public class Server {
	
	@Id
	private String id;
	private String name;
	private String tenant;
	private String privateIp;
	private String publicIp;
	private int diskSize;
	private int cpuUsed;
	private int ramSize;
	private String os;
	private String beginTime;
	private String endTime;
	
	public Server() {
	}
	
	public Server(String name, String tenant, String privateIp,
			String publicIp, int diskSize, int cpuUsed, int ramSize, String os,
			String beginTime, String endTime) {
		this.name = name;
		this.tenant = tenant;
		this.privateIp = privateIp;
		this.publicIp = publicIp;
		this.diskSize = diskSize;
		this.cpuUsed = cpuUsed;
		this.ramSize = ramSize;
		this.os = os;
		this.beginTime = beginTime;
		this.endTime = endTime;
	}
	
	public Server(String id, String name, String tenant, String privateIp,
			String publicIp, int diskSize, int cpuUsed, int ramSize, String os,
			String beginTime, String endTime) {
		this.id = id;
		this.name = name;
		this.tenant = tenant;
		this.privateIp = privateIp;
		this.publicIp = publicIp;
		this.diskSize = diskSize;
		this.cpuUsed = cpuUsed;
		this.ramSize = ramSize;
		this.os = os;
		this.beginTime = beginTime;
		this.endTime = endTime;
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
	public String getTenant() {
		return tenant;
	}
	public void setTenant(String tenant) {
		this.tenant = tenant;
	}
	public String getPrivateIp() {
		return privateIp;
	}
	public void setPrivateIp(String privateIp) {
		this.privateIp = privateIp;
	}
	public String getPublicIp() {
		return publicIp;
	}
	public void setPublicIp(String publicIp) {
		this.publicIp = publicIp;
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
	public String getBeginTime() {
		return beginTime;
	}
	public void setBeginTime(String beginTime) {
		this.beginTime = beginTime;
	}
	public String getEndTime() {
		return endTime;
	}
	public void setEndTime(String endTime) {
		this.endTime = endTime;
	}
	
	@Override
	public String toString() {
		return "Server [id=" + id + ", name=" + name + ", tenant=" + tenant
				+ ", privateIp=" + privateIp + ", publicIp=" + publicIp
				+ ", diskSize=" + diskSize + ", cpuUsed=" + cpuUsed
				+ ", ramSize=" + ramSize + ", os=" + os + ", beginTime="
				+ beginTime + ", endTime=" + endTime + "]";
	}

	
}