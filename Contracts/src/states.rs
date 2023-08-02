use anchor_lang::prelude::*;

#[account]
#[derive(Default)]
pub struct User{
    pub authority: Pubkey,
    pub name : String,
    pub bio : String,
    pub cover : String,
    pub dp : String,
    pub song_count : u8,
}

#[account]
#[derive(Default)]
pub struct Song {
    pub authority: Pubkey,
    pub title : String,
    pub genre : String,
    pub file_url : String,
    pub idx : u8,
    pub status : bool,
}