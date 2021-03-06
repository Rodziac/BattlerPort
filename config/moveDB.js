var moveDb = `;Parameters
;d - Damage: d
;m - Stat modifier: m[# - 0:defender, 1:attacker][# - 0:atk, 1:def, 2:spe, 3:spc, 4:random][### - % chance]["+"/"-" - increase/decrease][# - amount]
;s - Give status: s[# - 0:defender, 1:attacker][# - status Effect][### - % chance]
;c - Cures status: c
;f - Flinch: f[### - % chance]
;h - Heal: h[# - 0:percentage of MaxHP, 1:half of damage][%%%]
;r - Recoil: r[# - 0:based on dmg, 1:based on your current hp][### - %]
;w - Recharge next turn: w
;u - Unequip: u[### - % chance]
;Pwr = -1 is OHKO
;Acc = -1 is Never Miss
;Ctg (Category) is currently unused.

[absorb]
Type=4
;Ctg=special
Pwr=20
Acc=100
Eff=dh1050

[acid]
Type=7
;Ctg=special
Pwr=40
Acc=100
Eff=dm01010-1

[acid armor]
Type=7
;Ctg=status
Pwr=0
Acc=-1
Eff=m11100+2

[acid spray]
Type=7
;Ctg=special
Pwr=40
Acc=100
Eff=dm03010-1

[acrobatics]
Type=9
;Ctg=physical
Pwr=55
Acc=100
Eff=d

[acupressure]
Type=0
;Ctg=status
Pwr=0
Acc=-1
Eff=m1x+2100

[aerial ace]
Type=9
;Ctg=physical
Pwr=60
Acc=-1
Eff=d

[aeroblast]
Type=9
;Ctg=special
Pwr=100
Acc=95
Eff=d
;[after you]
;Type=0
;Ctg=status
;Pwr=0
;Acc=-1
;Eff=

[agility]
Type=10
;Ctg=status
Pwr=0
Acc=-1
Eff=m12100+2

[air cutter]
Type=9
;Ctg=special
Pwr=55
Acc=95
Eff=d

[air slash]
Type=9
;Ctg=special
Pwr=75
Acc=95
Eff=df30
;[ally switch]
;Type=10
;Ctg=status
;Pwr=0
;Acc=-1
;Eff=

[amnesia]
Type=10
;Ctg=status
Pwr=0
Acc=-1
Eff=m13100+2

[ancientpower]
Type=12
;Ctg=special
Pwr=60
Acc=100
Eff=dm1x+1010

[aqua jet]
Type=2
;Ctg=physical
Pwr=40
Acc=100
Eff=d

[aqua ring]
Type=2
;Ctg=status
Pwr=0
Acc=-1
Eff=h06

[aqua tail]
Type=2
;Ctg=physical
Pwr=90
Acc=90
Eff=d

[arm thrust]
Type=6
;Ctg=physical
Pwr=15
Acc=100
Eff=d

[aromatherapy]
Type=4
;Ctg=status
Pwr=0
Acc=-1
Eff=c100
;[assist]
;Type=0
;Ctg=status
;Pwr=0
;Acc=100
;Eff=

[assurance]
Type=15
;Ctg=physical
Pwr=50
Acc=100
Eff=d

[astonish]
Type=13
;Ctg=physical
Pwr=30
Acc=100
Eff=df30

[attack order]
Type=11
;Ctg=physical
Pwr=90
Acc=100
Eff=dc100

[attract]
Type=0
;Ctg=status
Pwr=0
Acc=100
Eff=s06100

[aura sphere]
Type=6
;Ctg=special
Pwr=90
Acc=-1
Eff=d

[aurora beam]
Type=5
;Ctg=special
Pwr=65
Acc=100
Eff=ds04010

[autotomize]
Type=16
;Ctg=status
Pwr=0
Acc=-1
Eff=m12100+2

[avalanche]
Type=5
;Ctg=physical
Pwr=60
Acc=100
Eff=d

[barrage]
Type=0
;Ctg=physical
Pwr=15
Acc=85
Eff=d

[barrier]
Type=10
;Ctg=status
Pwr=0
Acc=-1
Eff=m11100+2
;[baton pass]
;Type=0
;Ctg=status
;Pwr=0
;Acc=-1
;Eff=

[beat up]
Type=15
;Ctg=physical
;Pwr=
Acc=100
Eff=d

[belly drum]
Type=0
;Ctg=status
Pwr=0
Acc=-1
Eff=r1050m10100+6
;[bestow]
;Type=0
;Ctg=status
;Pwr=0
;Acc=-1
;Eff=

[bide]
Type=0
;Ctg=physical
;Pwr=
Acc=100
Eff=d

[bind]
Type=0
;Ctg=physical
Pwr=15
Acc=85
Eff=ds03050

[bite]
Type=15
;Ctg=physical
Pwr=60
Acc=100
Eff=df30

[blast burn]
Type=1
;Ctg=special
Pwr=150
Acc=90
Eff=dw

[blaze kick]
Type=1
;Ctg=physical
Pwr=85
Acc=90
Eff=ds01010

[blizzard]
Type=5
;Ctg=special
Pwr=120
Acc=70
Eff=ds04010
;[block]
;Type=0
;Ctg=status
;Pwr=0
;Acc=100
;Eff=

[blue flare]
Type=1
;Ctg=special
Pwr=130
Acc=85
Eff=ds01020

[body slam]
Type=0
;Ctg=physical
Pwr=85
Acc=100
Eff=ds03099

[bolt strike]
Type=3
;Ctg=physical
Pwr=130
Acc=85
Eff=ds03020

[bone club]
Type=8
;Ctg=physical
Pwr=65
Acc=85
Eff=df10

[bone rush]
Type=8
;Ctg=physical
Pwr=25
Acc=90
Eff=d

[bonemerang]
Type=8
;Ctg=physical
Pwr=50
Acc=90
Eff=d

[bounce]
Type=9
;Ctg=physical
Pwr=85
Acc=85
Eff=ds03030

[brave bird]
Type=9
;Ctg=physical
Pwr=120
Acc=100
Eff=dr0033

[brick break]
Type=6
;Ctg=physical
Pwr=75
Acc=100
Eff=d

[brine]
Type=2
;Ctg=special
Pwr=65
Acc=100
Eff=d

[bubble]
Type=2
;Ctg=special
Pwr=20
Acc=100
Eff=dm02010-1

[bubblebeam]
Type=2
;Ctg=special
Pwr=65
Acc=100
Eff=dm02010-1

[bug bite]
Type=11
;Ctg=physical
Pwr=60
Acc=100
Eff=d

[bug buzz]
Type=11
;Ctg=special
Pwr=90
Acc=100
Eff=dm03010-1

[bulk up]
Type=6
;Ctg=status
Pwr=0
Acc=-1
Eff=m10100+1m11100+1

[bulldoze]
Type=8
;Ctg=physical
Pwr=60
Acc=100
Eff=dm02100-1

[bullet punch]
Type=16
;Ctg=physical
Pwr=40
Acc=100
Eff=d

[bullet seed]
Type=4
;Ctg=physical
Pwr=25
Acc=100
Eff=d

[calm mind]
Type=10
;Ctg=status
Pwr=0
Acc=-1
Eff=m13100+1
;[camouflage]
;Type=0
;Ctg=status
;Pwr=0
;Acc=100
;Eff=

[captivate]
Type=0
;Ctg=status
Pwr=0
Acc=100
Eff=m03050-2

[charge]
Type=3
;Ctg=status
Pwr=0
Acc=100
Eff=m13100+1

[charge beam]
Type=3
;Ctg=special
Pwr=50
Acc=90
Eff=dm13070+1

[charm]
Type=0
;Ctg=status
Pwr=0
Acc=100
Eff=m00100-2

[chatter]
Type=9
;Ctg=special
Pwr=60
Acc=100
Eff=ds05010

[chip away]
Type=0
;Ctg=physical
Pwr=70
Acc=100
Eff=d

[circle throw]
Type=6
;Ctg=physical
Pwr=60
Acc=90
Eff=d

[clamp]
Type=2
;Ctg=physical
Pwr=35
Acc=85
Eff=d

[clear smog]
Type=7
;Ctg=special
Pwr=50
Acc=-1
Eff=d

[close combat]
Type=6
;Ctg=physical
Pwr=120
Acc=100
Eff=dm11100-2

[coil]
Type=7
;Ctg=status
Pwr=0
Acc=-1
Eff=m10100+1m11100+1

[comet punch]
Type=0
;Ctg=physical
Pwr=18
Acc=85
Eff=d

[confuse ray]
Type=13
;Ctg=status
Pwr=0
Acc=100
Eff=s05100

[confusion]
Type=10
;Ctg=special
Pwr=50
Acc=100
Eff=ds05010

[constrict]
Type=0
;Ctg=physical
Pwr=10
Acc=100
Eff=d
;[conversion]
;Type=0
;Ctg=status
;Pwr=0
;Acc=-1
;Eff=
;[conversion 2]
;Type=0
;Ctg=status
;Pwr=0
;Acc=100
;Eff=
;[copycat]
;Type=0
;Ctg=status
;Pwr=0
;Acc=-1
;Eff=

[cosmic power]
Type=10
;Ctg=status
Pwr=0
Acc=-1
Eff=m11100+2

[cotton guard]
Type=4
;Ctg=status
Pwr=0
Acc=-1
Eff=m11100+3

[cotton spore]
Type=4
;Ctg=status
Pwr=0
Acc=100
Eff=m02100-2

[counter]
Type=6
;Ctg=physical
;Pwr=
Acc=100
Eff=d

[covet]
Type=0
;Ctg=physical
Pwr=60
Acc=100
Eff=d

[crabhammer]
Type=2
;Ctg=physical
Pwr=90
Acc=90
Eff=d

[cross chop]
Type=6
;Ctg=physical
Pwr=100
Acc=80
Eff=d

[cross poison]
Type=7
;Ctg=physical
Pwr=70
Acc=100
Eff=ds02010

[crunch]
Type=15
;Ctg=physical
Pwr=80
Acc=100
Eff=dm01020-1

[crush claw]
Type=0
;Ctg=physical
Pwr=75
Acc=95
Eff=dm01050-1

[crush grip]
Type=0
;Ctg=physical
;Pwr=
Acc=100
Eff=d

[curse]
Type=13
;Ctg=status
Pwr=0
Acc=-1
Eff=m10100+1m11100+1m12100-1

[cut]
Type=0
;Ctg=physical
Pwr=50
Acc=95
Eff=d

[dark pulse]
Type=15
;Ctg=special
Pwr=80
Acc=100
Eff=df20

[dark void]
Type=15
;Ctg=status
Pwr=0
Acc=80
Eff=s00100

[defend order]
Type=11
;Ctg=status
Pwr=0
Acc=-1
Eff=m11100+1

[defense curl]
Type=0
;Ctg=status
Pwr=0
Acc=-1
Eff=m11100+1
;[defog]
;Type=9
;Ctg=status
;Pwr=0
;Acc=-1
;Eff=
;[destiny bond]
;Type=13
;Ctg=status
;Pwr=0
;Acc=-1
;Eff=
;[detect]
;Type=6
;Ctg=status
;Pwr=0
;Acc=-1
;Eff=

[dig]
Type=8
;Ctg=physical
Pwr=80
Acc=100
Eff=d
;[disable]
;Type=0
;Ctg=status
;Pwr=0
;Acc=100
;Eff=

[discharge]
Type=3
;Ctg=special
Pwr=80
Acc=100
Eff=ds03030

[dive]
Type=2
;Ctg=physical
Pwr=80
Acc=100
Eff=d

[dizzy punch]
Type=0
;Ctg=physical
Pwr=70
Acc=100
Eff=ds05020

[doom desire]
Type=16
;Ctg=special
Pwr=140
Acc=100
Eff=d

[double hit]
Type=0
;Ctg=physical
Pwr=35
Acc=90
Eff=d

[double kick]
Type=6
;Ctg=physical
Pwr=30
Acc=100
Eff=d
;[double team]
;Type=0
;Ctg=status
;Pwr=0
;Acc=-1
;Eff=

[double-edge]
Type=0
;Ctg=physical
Pwr=120
Acc=100
Eff=dr0033

[doubleslap]
Type=0
;Ctg=physical
Pwr=15
Acc=85
Eff=d

[draco meteor]
Type=14
;Ctg=special
Pwr=140
Acc=90
Eff=dm10100-2

[dragon claw]
Type=14
;Ctg=physical
Pwr=80
Acc=100
Eff=d

[dragon dance]
Type=14
;Ctg=status
Pwr=0
Acc=-1
Eff=m10100+1m12100+1

[dragon pulse]
Type=14
;Ctg=special
Pwr=90
Acc=100
Eff=d

[dragon rage]
Type=14
;Ctg=special
;Pwr=
Acc=100
Eff=d40

[dragon rush]
Type=14
;Ctg=physical
Pwr=100
Acc=75
Eff=df20

[dragon tail]
Type=14
;Ctg=physical
Pwr=60
Acc=90
Eff=d

[dragonbreath]
Type=14
;Ctg=special
Pwr=60
Acc=100
Eff=ds03030

[drain punch]
Type=6
;Ctg=physical
Pwr=75
Acc=100
Eff=dh1050

[dream eater]
Type=10
;Ctg=special
Pwr=100
Acc=100
Eff=d

[drill peck]
Type=9
;Ctg=physical
Pwr=80
Acc=100
Eff=d

[drill run]
Type=8
;Ctg=physical
Pwr=80
Acc=95
Eff=d

[dual chop]
Type=14
;Ctg=physical
Pwr=40
Acc=90
Eff=d

[dynamicpunch]
Type=6
;Ctg=physical
Pwr=100
Acc=50
Eff=ds05100

[earth power]
Type=8
;Ctg=special
Pwr=90
Acc=100
Eff=dm01010-1

[earthquake]
Type=8
;Ctg=physical
Pwr=100
Acc=100
Eff=d

[echoed voice]
Type=0
;Ctg=special
Pwr=40
Acc=100
Eff=d

[egg bomb]
Type=0
;Ctg=physical
Pwr=100
Acc=75
Eff=d

[electro ball]
Type=3
;Ctg=special
;Pwr=
Acc=100
Eff=d

[electroweb]
Type=3
;Ctg=special
Pwr=55
Acc=95
Eff=dm02100-1
;[embargo]
;Type=15
;Ctg=status
;Pwr=0
;Acc=100
;Eff=

[ember]
Type=1
;Ctg=special
Pwr=40
Acc=100
Eff=ds01010
;[encore]
;Type=0
;Ctg=status
;Pwr=0
;Acc=100
;Eff=

[endeavor]
Type=0
;Ctg=physical
;Pwr=
Acc=100
Eff=d
;[endure]
;Type=0
;Ctg=status
;Pwr=0
;Acc=-1
;Eff=

[energy ball]
Type=4
;Ctg=special
Pwr=80
Acc=100
Eff=dm01010-1
;[entrainment]
;Type=0
;Ctg=status
;Pwr=0
;Acc=100
;Eff=

[eruption]
Type=1
;Ctg=special
;Pwr=
Acc=100
Eff=d

[explosion]
Type=0
;Ctg=physical
Pwr=250
Acc=100
Eff=dr1100

[extrasensory]
Type=10
;Ctg=special
Pwr=80
Acc=100
Eff=df10

[extremespeed]
Type=0
;Ctg=physical
Pwr=80
Acc=100
Eff=d

[facade]
Type=0
;Ctg=physical
Pwr=70
Acc=100
Eff=d

[faint attack]
Type=15
;Ctg=physical
Pwr=60
Acc=-1
Eff=d

[fake out]
Type=0
;Ctg=physical
Pwr=40
Acc=100
Eff=df10

[fake tears]
Type=15
;Ctg=status
Pwr=0
Acc=100
Eff=m01100-2

[false swipe]
Type=0
;Ctg=physical
Pwr=40
Acc=100
Eff=d

[featherdance]
Type=9
;Ctg=status
Pwr=0
Acc=100
Eff=m00100-2

[feint]
Type=0
;Ctg=physical
Pwr=30
Acc=100
Eff=d

[fiery dance]
Type=1
;Ctg=special
Pwr=80
Acc=100
Eff=dm10050+1

[final gambit]
Type=6
;Ctg=special
;Pwr=
Acc=100
Eff=d

[fire blast]
Type=1
;Ctg=special
Pwr=120
Acc=85
Eff=ds01010

[fire fang]
Type=1
;Ctg=physical
Pwr=65
Acc=95
Eff=ds01010f10

[fire pledge]
Type=1
;Ctg=special
Pwr=50
Acc=100
Eff=d

[fire punch]
Type=1
;Ctg=physical
Pwr=75
Acc=100
Eff=ds01010

[fire spin]
Type=1
;Ctg=special
Pwr=35
Acc=85
Eff=d

[fissure]
Type=8
;Ctg=physical
Acc=30
Pwr=-1
Eff=d

[flail]
Type=0
;Ctg=physical
;Pwr=
Acc=100
Eff=d

[flame burst]
Type=1
;Ctg=special
Pwr=70
Acc=100
Eff=d

[flame charge]
Type=1
;Ctg=physical
Pwr=50
Acc=100
Eff=dm12100+1

[flame wheel]
Type=1
;Ctg=physical
Pwr=60
Acc=100
Eff=ds01010

[flamethrower]
Type=1
;Ctg=special
Pwr=95
Acc=100
Eff=ds01010

[flare blitz]
Type=1
;Ctg=physical
Pwr=120
Acc=100
Eff=dr0033
;[flash]
;Type=0
;Ctg=status
;Pwr=0
;Acc=100
;Eff=

[flash cannon]
Type=16
;Ctg=special
Pwr=80
Acc=100
Eff=dm01010-1

[flatter]
Type=15
;Ctg=status
Pwr=0
Acc=100
Eff=m00100+2s05100

[fling]
Type=15
;Ctg=physical
;Pwr=
Acc=100
Eff=d

[fly]
Type=9
;Ctg=physical
Pwr=90
Acc=95
Eff=d

[focus blast]
Type=6
;Ctg=special
Pwr=120
Acc=70
Eff=dm01010-1
;[focus energy]
;Type=0
;Ctg=status
;Pwr=0
;Acc=-1
;Eff=

[focus punch]
Type=6
;Ctg=physical
Pwr=150
Acc=100
Eff=d
;[follow me]
;Type=0
;Ctg=status
;Pwr=0
;Acc=100
;Eff=

[force palm]
Type=6
;Ctg=physical
Pwr=60
Acc=100
Eff=ds03030
;[foresight]
;Type=0
;Ctg=status
;Pwr=0
;Acc=100
;Eff=

[foul play]
Type=15
;Ctg=physical
Pwr=95
Acc=100
Eff=d

[freeze shock]
Type=5
;Ctg=physical
Pwr=140
Acc=90
Eff=ds03030

[frenzy plant]
Type=4
;Ctg=special
Pwr=150
Acc=90
Eff=dw

[frost breath]
Type=5
;Ctg=special
Pwr=40
Acc=90
Eff=d

[frustration]
Type=0
;Ctg=physical
;Pwr=
Acc=100
Eff=d

[fury attack]
Type=0
;Ctg=physical
Pwr=15
Acc=85
Eff=d

[fury cutter]
Type=11
;Ctg=physical
Pwr=20
Acc=95
Eff=d

[fury swipes]
Type=0
;Ctg=physical
Pwr=18
Acc=80
Eff=d

[fusion bolt]
Type=3
;Ctg=physical
Pwr=100
Acc=100
Eff=d

[fusion flare]
Type=1
;Ctg=special
Pwr=100
Acc=100
Eff=d

[future sight]
Type=10
;Ctg=special
Pwr=100
Acc=100
Eff=d
;[gastro acid]
;Type=7
;Ctg=status
;Pwr=0
;Acc=100
;Eff=

[gear grind]
Type=16
;Ctg=physical
Pwr=50
Acc=85
Eff=d

[giga drain]
Type=4
;Ctg=special
Pwr=75
Acc=100
Eff=dh1050

[giga impact]
Type=0
;Ctg=physical
Pwr=150
Acc=90
Eff=dw

[glaciate]
Type=5
;Ctg=special
Pwr=65
Acc=95
Eff=dm02100-1

[glare]
Type=0
;Ctg=status
Pwr=0
Acc=90
Eff=s03100

[grass knot]
Type=4
;Ctg=special
;Pwr=
Acc=100
Eff=d

[grass pledge]
Type=4
;Ctg=special
Pwr=50
Acc=100
Eff=d

[grasswhistle]
Type=4
;Ctg=status
Pwr=0
Acc=55
Eff=s00100
;[gravity]
;Type=10
;Ctg=status
;Pwr=0
;Eff=

[growl]
Type=0
;Ctg=status
Pwr=0
Acc=100
Eff=m00100-1

[growth]
Type=0
;Ctg=status
Pwr=0
Eff=m10100+1
Name=growth
Acc=-1
;[grudge]
;Type=13
;Ctg=status
;Pwr=0
;Acc=100
;Eff=
;[guard split]
;Type=10
;Ctg=status
;Pwr=0
;Eff=
;[guard swap]
;Type=10
;Ctg=status
;Pwr=0
;Eff=

[guillotine]
Type=0
;Ctg=physical
Acc=30
Pwr=-1
Eff=d

[gunk shot]
Type=7
;Ctg=physical
Pwr=120
Acc=70
Eff=ds02030

[gust]
Type=9
;Ctg=special
Pwr=40
Acc=100
Eff=d

[gyro ball]
Type=16
;Ctg=physical
;Pwr=
Acc=100
Eff=d
;[hail]
;Type=5
;Ctg=status
;Pwr=0
;Eff=

[hammer arm]
Type=6
;Ctg=physical
Pwr=100
Acc=90
Eff=dm12100-1

[harden]
Type=0
;Ctg=status
Pwr=0
Eff=m11100+1
Name=harden
Acc=-1
;[haze]
;Type=5
;Ctg=status
;Pwr=0
;Eff=

[head charge]
Type=0
;Ctg=physical
Pwr=120
Acc=100
Eff=dr0025

[head smash]
Type=12
;Ctg=physical
Pwr=150
Acc=80
Eff=dr0050

[headbutt]
Type=0
;Ctg=physical
Pwr=70
Acc=100
Eff=df30

[heal bell]
Type=0
;Ctg=status
Pwr=0
Eff=c100
Name=heal bell
Acc=-1
;[heal block]
;Type=10
;Ctg=status
;Pwr=0
;Acc=100
;Eff=

[heal order]
Type=11
;Ctg=status
Pwr=0
Eff=h050
Name=heal order
Acc=-1

[heal pulse]
Type=10
;Ctg=status
Pwr=0
Eff=h050
Name=heal pulse
Acc=-1
;[healing wish]
;Type=10
;Ctg=status
;Pwr=0
;Eff=

[heart stamp]
Type=10
;Ctg=physical
Pwr=60
Acc=100
Eff=df10
;[heart swap]
;Type=10
;Ctg=status
;Pwr=0
;Eff=

[heat crash]
Type=1
;Ctg=physical
;Pwr=
Acc=100
Eff=d

[heat wave]
Type=1
;Ctg=special
Pwr=100
Acc=90
Eff=ds01010

[heavy slam]
Type=16
;Ctg=physical
;Pwr=
Acc=100
Eff=d
;[helping hand]
;Type=0
;Ctg=status
;Pwr=0
;Acc=100
;Eff=

[hex]
Type=13
;Ctg=special
Pwr=50
Acc=100
Eff=d

[hi jump kick]
Type=6
;Ctg=physical
Pwr=130
Acc=90
Eff=dr150

[hidden power]
Type=0
;Ctg=special
;Pwr=
Acc=100
Eff=d

[hone claws]
Type=15
;Ctg=status
Pwr=0
Eff=m10100+1
Name=hone claws
Acc=-1

[horn attack]
Type=0
;Ctg=physical
Pwr=65
Acc=100
Eff=d

[horn drill]
Type=0
;Ctg=physical
Acc=30
Pwr=-1
Eff=d

[horn leech]
Type=4
;Ctg=physical
Pwr=75
Acc=100
Eff=dh150

[howl]
Type=0
;Ctg=status
Pwr=0
Eff=m10100+1
Name=howl
Acc=-1

[hurricane]
Type=9
;Ctg=special
Pwr=120
Acc=70
Eff=ds05030

[hydro cannon]
Type=2
;Ctg=special
Pwr=150
Acc=90
Eff=dw

[hydro pump]
Type=2
;Ctg=special
Pwr=120
Acc=80
Eff=d

[hyper beam]
Type=0
;Ctg=special
Pwr=150
Acc=90
Eff=dw

[hyper fang]
Type=0
;Ctg=physical
Pwr=80
Acc=90
Eff=df10

[hyper voice]
Type=0
;Ctg=special
Pwr=90
Acc=100
Eff=d

[hypnosis]
Type=10
;Ctg=status
Pwr=0
Acc=60
Eff=s00100

[ice ball]
Type=5
;Ctg=physical
Pwr=30
Acc=90
Eff=d

[ice beam]
Type=5
;Ctg=special
Pwr=95
Acc=100
Eff=ds04010

[ice burn]
Type=5
;Ctg=special
Pwr=140
Acc=90
Eff=ds01030

[ice fang]
Type=5
;Ctg=physical
Pwr=65
Acc=95
Eff=ds04010f10

[ice punch]
Type=5
;Ctg=physical
Pwr=75
Acc=100
Eff=ds04010

[ice shard]
Type=5
;Ctg=physical
Pwr=40
Acc=100
Eff=d

[icicle crash]
Type=5
;Ctg=physical
Pwr=85
Acc=90
Eff=df30

[icicle spear]
Type=5
;Ctg=physical
Pwr=25
Acc=100
Eff=d

[icy wind]
Type=5
;Ctg=special
Pwr=55
Acc=95
Eff=dm02100-1
;[imprison]
;Type=10
;Ctg=status
;Pwr=0
;Acc=100
;Eff=

[incinerate]
Type=1
;Ctg=special
Pwr=30
Acc=100
Eff=d

[inferno]
Type=1
;Ctg=special
Pwr=100
Acc=50
Eff=ds01100

[ingrain]
Type=4
;Ctg=status
Pwr=0
Acc=100
Eff=h06

[iron defense]
Type=16
;Ctg=status
Pwr=0
Eff=m11100+2
Name=iron defense
Acc=-1

[iron head]
Type=16
;Ctg=physical
Pwr=80
Acc=100
Eff=df30

[iron tail]
Type=16
;Ctg=physical
Pwr=100
Acc=75
Eff=dm01010-1

[judgment]
Type=0
;Ctg=special
Pwr=100
Acc=100
Eff=d

[jump kick]
Type=6
;Ctg=physical
Pwr=100
Acc=95
Eff=dr150

[karate chop]
Type=6
;Ctg=physical
Pwr=50
Acc=100
Eff=d
;[kinesis]
;Type=10
;Ctg=status
;Pwr=0
;Acc=80
;Eff=

[knock off]
Type=15
;Ctg=physical
Pwr=20
Acc=100
Eff=du050
Name=knock off

[last resort]
Type=0
;Ctg=physical
Pwr=140
Acc=100
Eff=d

[lava plume]
Type=1
;Ctg=special
Pwr=80
Acc=100
Eff=ds01030

[leaf blade]
Type=4
;Ctg=physical
Pwr=90
Acc=100
Eff=d

[leaf storm]
Type=4
;Ctg=special
Pwr=140
Acc=90
Eff=dm10100-2

[leaf tornado]
Type=4
;Ctg=special
Pwr=65
Acc=90
Eff=d

[leech life]
Type=11
;Ctg=physical
Pwr=20
Acc=100
Eff=dh150

[leech seed]
Type=4
;Ctg=status
Pwr=0
Acc=90
Eff=h06

[leer]
Type=0
;Ctg=status
Pwr=0
Acc=100
Eff=m01100-1

[lick]
Type=13
;Ctg=physical
Pwr=20
Acc=100
Eff=ds03030

[light screen]
Type=10
;Ctg=status
Pwr=0
Eff=m11100+2
Name=light screen
Acc=-1
;[lock-on]
;Type=0
;Ctg=status
;Pwr=0
;Acc=100
;Eff=

[lovely kiss]
Type=0
;Ctg=status
Pwr=0
Acc=75
Eff=s00100

[low kick]
Type=6
;Ctg=physical
;Pwr=
Acc=100
Eff=d

[low sweep]
Type=6
;Ctg=physical
Pwr=60
Acc=100
Eff=dm02100-1
;[lucky chant]
;Type=0
;Ctg=status
;Pwr=0
;Eff=
;[lunar dance]
;Type=10
;Ctg=status
;Pwr=0
;Eff=

[luster purge]
Type=10
;Ctg=special
Pwr=70
Acc=100
Eff=dm01050-1

[mach punch]
Type=6
;Ctg=physical
Pwr=40
Acc=100
Eff=d
;[magic coat]
;Type=10
;Ctg=status
;Pwr=0
;Acc=100
;Eff=
;[magic room]
;Type=10
;Ctg=status
;Pwr=0
;Eff=

[magical leaf]
Type=4
;Ctg=special
Acc=-1
Pwr=60
Eff=d

[magma storm]
Type=1
;Ctg=special
Pwr=120
Acc=75
Eff=d

[magnet bomb]
Type=16
;Ctg=physical
Acc=-1
Pwr=60
Eff=d
;[magnet rise]
;Type=3
;Ctg=status
;Pwr=0
;Eff=

[magnitude]
Type=8
;Ctg=physical
;Pwr=
Acc=100
Eff=d
;[me first]
;Type=0
;Ctg=status
;Pwr=0
;Eff=
;[mean look]
;Type=0
;Ctg=status
;Pwr=0
;Acc=100
;Eff=

[meditate]
Type=10
;Ctg=status
Pwr=0
Eff=m10100+1
Name=meditate
Acc=-1

[mega drain]
Type=4
;Ctg=special
Pwr=40
Acc=100
Eff=dh150

[mega kick]
Type=0
;Ctg=physical
Pwr=120
Acc=75
Eff=d

[mega punch]
Type=0
;Ctg=physical
Pwr=80
Acc=85
Eff=d

[megahorn]
Type=11
;Ctg=physical
Pwr=120
Acc=85
Eff=d
;[memento]
;Type=15
;Ctg=status
;Pwr=0
;Acc=100
;Eff=

[metal burst]
Type=16
;Ctg=physical
;Pwr=
Acc=100
Eff=d

[metal claw]
Type=16
;Ctg=physical
Pwr=50
Acc=95
Eff=dm10010+1

[metal sound]
Type=16
;Ctg=status
Pwr=0
Acc=85
Eff=m01100-2

[meteor mash]
Type=16
;Ctg=physical
Pwr=100
Acc=85
Eff=dm10020+1
;[metronome]
;Type=0
;Ctg=status
;Pwr=0
;Eff=

[milk drink]
Type=0
;Ctg=status
Pwr=0
Eff=h050
Name=milk drink
Acc=-1
;[mimic]
;Type=0
;Ctg=status
;Pwr=0
;Acc=100
;Eff=
;[mind reader]
;Type=0
;Ctg=status
;Pwr=0
;Acc=100
;Eff=
;[minimize]
;Type=0
;Ctg=status
;Pwr=0
;Eff=
;[miracle eye]
;Type=10
;Ctg=status
;Pwr=0
;Eff=
;[mirror coat]
;Type=10
;Ctg=special
;Pwr=
;Acc=100
;Eff=
;[mirror move]
;Type=9
;Ctg=status
;Pwr=0
;Eff=

[mirror shot]
Type=16
;Ctg=special
Pwr=65
Acc=85
Eff=d
;[mist]
;Type=5
;Ctg=status
;Pwr=0
;Eff=

[mist ball]
Type=10
;Ctg=special
Pwr=70
Acc=100
Eff=dm00050-1

[moonlight]
Type=0
;Ctg=status
Pwr=0
Eff=h050
Name=moonlight
Acc=-1

[morning sun]
Type=0
;Ctg=status
Pwr=0
Eff=h050
Acc=-1

[mud bomb]
Type=8
;Ctg=special
Pwr=65
Acc=85
Eff=d

[mud shot]
Type=8
;Ctg=special
Pwr=55
Acc=95
Eff=dm02100-1
;[mud sport]
;Type=8
;Ctg=status
;Pwr=0
;Acc=100
;Eff=

[mud-slap]
Type=8
;Ctg=special
Pwr=20
Acc=100
Eff=d

[muddy water]
Type=2
;Ctg=special
Pwr=95
Acc=85
Eff=d

[nasty plot]
Type=15
;Ctg=status
Pwr=0
Eff=m10100+2
Name=nasty plot
Acc=-1

[natural gift]
Type=0
;Ctg=physical
;Pwr=
Acc=100
Eff=d

[nature power]
Type=0
;Ctg=status
Pwr=0
Acc=95
Eff=d

[needle arm]
Type=4
;Ctg=physical
Pwr=60
Acc=100
Eff=df30

[night daze]
Type=15
;Ctg=special
Pwr=85
Acc=95
Eff=d

[night shade]
Type=13
;Ctg=special
;Pwr=
Acc=100
Eff=d

[night slash]
Type=15
;Ctg=physical
Pwr=70
Acc=100
Eff=d
;[nightmare]
;Type=13
;Ctg=status
;Pwr=0
;Acc=100
;Eff=

[octazooka]
Type=2
;Ctg=special
Pwr=65
Acc=85
Eff=d
;[odor sleuth]
;Type=0
;Ctg=status
;Pwr=0
;Acc=100
;Eff=

[ominous wind]
Type=13
;Ctg=special
Pwr=60
Acc=100
Eff=d

[outrage]
Type=14
;Ctg=physical
Pwr=120
Acc=100
Eff=ds15100

[overheat]
Type=1
;Ctg=special
Pwr=140
Acc=90
Eff=dm10100-2
;[pain split]
;Type=0
;Ctg=status
;Pwr=0
;Acc=100
;Eff=

[pay day]
Type=0
;Ctg=physical
Pwr=40
Acc=100
Eff=d

[payback]
Type=15
;Ctg=physical
Pwr=50
Acc=100
Eff=d

[peck]
Type=9
;Ctg=physical
Pwr=35
Acc=100
Eff=d
;[perish song]
;Type=0
;Ctg=status
;Pwr=0
;Eff=

[petal dance]
Type=4
;Ctg=special
Pwr=120
Acc=100
Eff=ds05100

[pin missile]
Type=11
;Ctg=physical
Pwr=14
Acc=85
Eff=d

[pluck]
Type=9
;Ctg=physical
Pwr=60
Acc=100
Eff=d

[poison fang]
Type=7
;Ctg=physical
Pwr=50
Acc=100
Eff=ds02020

[poison gas]
Type=7
;Ctg=status
Pwr=0
Acc=80
Eff=s02100

[poison jab]
Type=7
;Ctg=physical
Pwr=80
Acc=100
Eff=ds02030

[poison sting]
Type=7
;Ctg=physical
Pwr=15
Acc=100
Eff=ds02030

[poison tail]
Type=7
;Ctg=physical
Pwr=50
Acc=100
Eff=ds02010

[poisonpowder]
Type=7
;Ctg=status
Pwr=0
Acc=75
Eff=s02100

[pound]
Type=0
;Ctg=physical
Pwr=40
Acc=100
Eff=d

[powder snow]
Type=5
;Ctg=special
Pwr=40
Acc=100
Eff=ds04010

[power gem]
Type=12
;Ctg=special
Pwr=70
Acc=100
Eff=d
;[power split]
;Type=10
;Ctg=status
;Pwr=0
;Eff=
;[power swap]
;Type=10
;Ctg=status
;Pwr=0
;Eff=
;[power trick]
;Type=10
;Ctg=status
;Pwr=0
;Eff=

[power whip]
Type=4
;Ctg=physical
Pwr=120
Acc=85
Eff=d

[present]
Type=0
;Ctg=physical
;Pwr=
Acc=90
Eff=d
;[protect]
;Type=0
;Ctg=status
;Pwr=0
;Eff=

[psybeam]
Type=10
;Ctg=special
Pwr=65
Acc=100
Eff=ds05010
;[psych up]
;Type=0
;Ctg=status
;Pwr=0
;Eff=

[psychic]
Type=10
;Ctg=special
Pwr=90
Acc=100
Eff=dm01010-1

[psycho boost]
Type=10
;Ctg=special
Pwr=140
Acc=90
Eff=dm10100-2

[psycho cut]
Type=10
;Ctg=physical
Pwr=70
Acc=100
Eff=d
;[psycho shift]
;Type=10
;Ctg=status
;Pwr=0
;Acc=90
;Eff=

[psyshock]
Type=10
;Ctg=special
Pwr=80
Acc=100
Eff=d

[psystrike]
Type=10
;Ctg=special
Pwr=100
Acc=100
Eff=d

[psywave]
Type=10
;Ctg=special
;Pwr=
Acc=80
Eff=d

[punishment]
Type=15
;Ctg=physical
;Pwr=
Acc=100
Eff=d

[pursuit]
Type=15
;Ctg=physical
Pwr=40
Acc=100
Eff=d
;[quash]
;Type=15
;Ctg=status
;Pwr=0
;Acc=100
;Eff=

[quick attack]
Type=0
;Ctg=physical
Pwr=40
Acc=100
Eff=d
;[quick guard]
;Type=6
;Ctg=status
;Pwr=0
;Eff=

[quiver dance]
Type=11
;Ctg=status
Pwr=0
Eff=m10100+1m11100+1m12100+1
Acc=-1

[rage]
Type=0
;Ctg=physical
Pwr=20
Acc=100
Eff=d
;[rage powder]
;Type=11
;Ctg=status
;Pwr=0
;Eff=
;[rain dance]
;Type=2
;Ctg=status
;Pwr=0
;Eff=

[rapid spin]
Type=0
;Ctg=physical
Pwr=20
Acc=100
Eff=d

[razor leaf]
Type=4
;Ctg=physical
Pwr=55
Acc=95
Eff=d

[razor shell]
Type=2
;Ctg=physical
Pwr=75
Acc=95
Eff=dm01050-1

[razor wind]
Type=0
;Ctg=special
Pwr=80
Acc=100
Eff=d
Name=razor wind

[recover]
Type=0
;Ctg=status
Pwr=0
Eff=h050
Acc=-1
;[recycle]
;Type=0
;Ctg=status
;Pwr=0
;Acc=100
;Eff=

[reflect]
Type=10
;Ctg=status
Pwr=0
Eff=m11100+2
Acc=-1
;[reflect Type]
;Type=0
;Ctg=status
;Pwr=0
;Eff=
;Acc=-1

[refresh]
Type=0
;Ctg=status
Pwr=0
Acc=100
Eff=c100

[relic song]
Type=0
;Ctg=special
Pwr=75
Acc=100
Eff=ds00010

[rest]
Type=10
;Ctg=status
Pwr=0
Eff=h0100c100s10100
Acc=-1

[retaliate]
Type=0
;Ctg=physical
Pwr=70
Acc=100
Eff=d

[return]
Type=0
;Ctg=physical
;Pwr=
Acc=100
Eff=d

[revenge]
Type=6
;Ctg=physical
Pwr=60
Acc=100
Eff=d

[reversal]
Type=6
;Ctg=physical
;Pwr=
Acc=100
Eff=d
;[roar]
;Type=0
;Ctg=status
;Pwr=0
;Acc=100
;Eff=

[roar of time]
Type=14
;Ctg=special
Pwr=150
Acc=90
Eff=rw

[rock blast]
Type=12
;Ctg=physical
Pwr=25
Acc=90
Eff=d

[rock climb]
Type=0
;Ctg=physical
Pwr=90
Acc=85
Eff=ds05020

[rock polish]
Type=12
;Ctg=status
Pwr=0
Eff=m12100+2
Name=rock polish
Acc=-1

[rock slide]
Type=12
;Ctg=physical
Pwr=75
Acc=90
Eff=df30

[rock smash]
Type=6
;Ctg=physical
Pwr=40
Acc=100
Eff=dm01050-1

[rock throw]
Type=12
;Ctg=physical
Pwr=50
Acc=90
Eff=d

[rock tomb]
Type=12
;Ctg=physical
Pwr=50
Acc=80
Eff=df10

[rock wrecker]
Type=12
;Ctg=physical
Pwr=150
Acc=90
Eff=dw
;[role play]
;Type=10
;Ctg=status
;Pwr=0
;Acc=100
;Eff=

[rolling kick]
Type=6
;Ctg=physical
Pwr=60
Acc=85
Eff=df30

[rollout]
Type=12
;Ctg=physical
Pwr=30
Acc=90
Eff=d

[roost]
Type=9
;Ctg=status
Pwr=0
Eff=h050
Acc=-1

[round]
Type=0
;Ctg=special
Pwr=60
Acc=100
Eff=d

[sacred fire]
Type=1
;Ctg=physical
Pwr=100
Acc=95
Eff=ds01050

[sacred sword]
Type=6
;Ctg=physical
Pwr=90
Acc=100
Eff=d

[safeguard]
Type=0
;Ctg=status
Pwr=0
Eff=c100
Acc=-1

[sand tomb]
Type=8
;Ctg=physical
Pwr=35
Acc=85
Eff=d
;[sand-attack]
;Type=8
;Ctg=status
;Pwr=0
;Acc=100
;Eff=
;[sandstorm]
;Type=12
;Ctg=status
;Pwr=0
;Eff=

[scald]
Type=2
;Ctg=special
Pwr=80
Acc=100
Eff=ds01030

[scary face]
Type=0
;Ctg=status
Pwr=0
Acc=100
Eff=m02100-2

[scratch]
Type=0
;Ctg=physical
Pwr=40
Acc=100
Eff=d

[screech]
Type=0
;Ctg=status
Pwr=0
Acc=85
Eff=m01100-2

[searing shot]
Type=1
;Ctg=special
Pwr=100
Acc=100
Eff=ds01030

[secret power]
Type=0
;Ctg=physical
Pwr=70
Acc=100
Eff=ds03030

[secret sword]
Type=6
;Ctg=special
Pwr=85
Acc=100
Eff=d

[seed bomb]
Type=4
;Ctg=physical
Pwr=80
Acc=100
Eff=d

[seed flare]
Type=4
;Ctg=special
Pwr=120
Acc=85
Eff=dm01040-2

[seismic toss]
Type=6
;Ctg=physical
;Pwr=
Acc=100
Eff=d

[selfdestruct]
Type=0
;Ctg=physical
Pwr=200
Acc=100
Eff=dr1100

[shadow ball]
Type=13
;Ctg=special
Pwr=80
Acc=100
Eff=dm01020-1

[shadow claw]
Type=13
;Ctg=physical
Pwr=70
Acc=100
Eff=d

[shadow force]
Type=13
;Ctg=physical
Pwr=120
Acc=100
Eff=d

[shadow punch]
Type=13
;Ctg=physical
Acc=-1
Pwr=60
Eff=d

[shadow sneak]
Type=13
;Ctg=physical
Pwr=40
Acc=100
Eff=d

[sharpen]
Type=0
;Ctg=status
Acc=-1
Pwr=0
Eff=m10100+1

[sheer cold]
Type=5
;Ctg=special
Acc=30
Pwr=-1
Eff=d

[shell smash]
Type=0
;Ctg=status
Acc=-1
Pwr=0
Eff=m11100-1m10100+2m12100+2

[shift gear]
Type=16
;Ctg=status
Pwr=0
Eff=m12100+2m10100+1
Acc=-1

[shock wave]
Type=3
;Ctg=special
Acc=-1
Pwr=60
Eff=d

[signal beam]
Type=11
;Ctg=special
Pwr=75
Acc=100
Eff=ds05010

[silver wind]
Type=11
;Ctg=special
Pwr=60
Acc=100
Eff=d
;[simple beam]
;Type=0
;Ctg=status
;Pwr=0
;Acc=100
;Eff=

[sing]
Type=0
;Ctg=status
Pwr=0
Acc=55
Eff=s00100
;[sketch]
;Type=0
;Ctg=status
;Pwr=0
;Eff=
;[skill swap]
;Type=10
;Ctg=status
;Pwr=0
;Acc=100
;Eff=

[skull bash]
Type=0
;Ctg=physical
Pwr=100
Acc=100
Eff=d

[sky attack]
Type=9
;Ctg=physical
Pwr=140
Acc=90
Eff=d

[sky drop]
Type=9
;Ctg=physical
Pwr=60
Acc=100
Eff=d

[sky uppercut]
Type=6
;Ctg=physical
Pwr=85
Acc=90
Eff=d
;[slack off]
;Type=0
;Ctg=status
;Pwr=0
;Acc=100
;Eff=

[slam]
Type=0
;Ctg=physical
Pwr=80
Acc=75
Eff=d

[slash]
Type=0
;Ctg=physical
Pwr=70
Acc=100
Eff=d

[sleep powder]
Type=4
;Ctg=status
Pwr=0
Acc=75
Eff=s00100
;[sleep talk]
;Type=0
;Ctg=status
;Pwr=0
;Eff=

[sludge]
Type=7
;Ctg=special
Pwr=65
Acc=100
Eff=ds02030

[sludge bomb]
Type=7
;Ctg=special
Pwr=90
Acc=100
Eff=ds02030

[sludge wave]
Type=7
;Ctg=special
Pwr=95
Acc=100
Eff=ds02010

[smack down]
Type=12
;Ctg=physical
Pwr=50
Acc=100
Eff=d

[smellingsalt]
Type=0
;Ctg=physical
Pwr=60
Acc=100
Eff=d

[smog]
Type=7
;Ctg=special
Pwr=20
Acc=70
Eff=ds02040
;[smokescreen]
;Type=0
;Ctg=status
;Pwr=0
;Acc=100
;Eff=

[snarl]
Type=15
;Ctg=special
Pwr=55
Acc=95
Eff=dm00100-1
;[snatch]
;Type=15
;Ctg=status
;Pwr=0
;Acc=100
;Eff=

[snore]
Type=0
;Ctg=special
Pwr=40
Acc=100
Eff=df30
;[soak]
;Type=2
;Ctg=status
;Pwr=0
;Acc=100
;Eff=
;[softboiled]
;Type=0
;Ctg=status
;Pwr=0
;Acc=100
;Eff=

[solarbeam]
Type=4
;Ctg=special
Pwr=120
Acc=100
Eff=d

[sonicboom]
Type=0
;Ctg=special
;Pwr=
Acc=90
Eff=d20

[spacial rend]
Type=14
;Ctg=special
Pwr=100
Acc=95
Eff=d

[spark]
Type=3
;Ctg=physical
Pwr=65
Acc=100
Eff=ds03030
;[spider web]
;Type=11
;Ctg=status
;Pwr=0
;Acc=100
;Eff=

[spike cannon]
Type=0
;Ctg=physical
Pwr=20
Acc=100
Eff=d
;[spikes]
;Type=8
;Ctg=status
;Pwr=0
;Eff=

[spit up]
Type=0
;Ctg=special
;Pwr=
Acc=100
Eff=d
;[spite]
;Type=13
;Ctg=status
;Pwr=0
;Acc=100
;Eff=

[splash]
Type=0
;Ctg=status
Acc=0
Pwr=0
Eff=0
Name=splash

[spore]
Type=4
;Ctg=status
Pwr=0
Acc=100
Eff=s00100
;[stealth rock]
;Type=12
;Ctg=status
;Pwr=0
;Eff=

[steamroller]
Type=11
;Ctg=physical
Pwr=65
Acc=100
Eff=df30

[steel wing]
Type=16
;Ctg=physical
Pwr=70
Acc=90
Eff=dm11010+1
;[stockpile]
;Type=0
;Ctg=status
;Pwr=0
;Eff=

[stomp]
Type=0
;Ctg=physical
Pwr=65
Acc=100
Eff=df30

[stone edge]
Type=12
;Ctg=physical
Pwr=100
Acc=80
Eff=d

[stored power]
Type=10
;Ctg=special
Pwr=20
Acc=100
Eff=d

[storm throw]
Type=6
;Ctg=physical
Pwr=40
Acc=100
Eff=d

[strength]
Type=0
;Ctg=physical
Pwr=80
Acc=100
Eff=d

[string shot]
Type=11
;Ctg=status
Pwr=0
Acc=95
Eff=m02100-1

[struggle]
Type=0
;Ctg=physical
Pwr=50
Acc=100
Eff=d

[struggle bug]
Type=11
;Ctg=special
Pwr=30
Acc=100
Eff=dm00100-1

[stun spore]
Type=4
;Ctg=status
Pwr=0
Acc=75
Eff=s03100

[submission]
Type=6
;Ctg=physical
Pwr=80
Acc=80
Eff=dr0025
;[substitute]
;Type=0
;Ctg=status
;Pwr=0
;Eff=

[sucker punch]
Type=15
;Ctg=physical
Pwr=80
Acc=100
Eff=d
;[sunny day]
;Type=1
;Ctg=status
;Pwr=0
;Eff=

[super fang]
Type=0
;Ctg=physical
;Pwr=
Acc=90
Eff=d

[superpower]
Type=6
;Ctg=physical
Pwr=120
Acc=100
Eff=dm10100-1m11100-1

[supersonic]
Type=0
;Ctg=status
Pwr=0
Acc=55
Eff=s05100

[surf]
Type=2
;Ctg=special
Pwr=95
Acc=100
Eff=d

[swagger]
Type=0
;Ctg=status
Pwr=0
Acc=90
Eff=s05100m00100+2
;[swallow]
;Type=0
;Ctg=status
;Pwr=0
;Eff=

[sweet kiss]
Type=0
;Ctg=status
Pwr=0
Acc=75
Eff=s00100
;[sweet scent]
;Type=0
;Ctg=status
;Pwr=0
;Acc=100
;Eff=

[swift]
Type=0
;Ctg=special
Acc=-1
Pwr=60
Eff=d
;[switcheroo]
;Type=15
;Ctg=status
;Pwr=0
;Acc=100
;Eff=

[swords dance]
Type=0
;Ctg=status
Pwr=0
Eff=m10100+2
Name=swords dance
Acc=-1

[synchronoise]
Type=10
;Ctg=special
Pwr=70
Acc=100
Eff=d
;[synthesis]
;Type=4
;Ctg=status
;Pwr=0
;Eff=

[tackle]
Type=0
;Ctg=physical
Pwr=50
Acc=100
Eff=d

[tail glow]
Type=11
;Ctg=status
Pwr=0
Acc=100
Eff=m00100+2

[tail slap]
Type=0
;Ctg=physical
Pwr=25
Acc=85
Eff=d

[tail whip]
Type=0
;Ctg=status
Pwr=0
Acc=100
Eff=m01100-1

[tailwind]
Type=9
;Ctg=status
Pwr=0
Eff=m12100+2
Name=tailwind
Acc=-1

[take down]
Type=0
;Ctg=physical
Pwr=90
Acc=85
Eff=dr0025
;[taunt]
;Type=15
;Ctg=status
;Pwr=0
;Acc=100
;Eff=

[techno blast]
Type=0
;Ctg=special
Pwr=85
Acc=100
Eff=d

[teeter dance]
Type=0
;Ctg=status
Pwr=0
Acc=100
Eff=s05100
;[telekinesis]
;Type=10
;Ctg=status
;Pwr=0
;Eff=
;[teleport]
;Type=10
;Ctg=status
;Pwr=0
;Eff=

[thief]
Type=15
;Ctg=physical
Pwr=40
Acc=100
Eff=d

[thrash]
Type=0
;Ctg=physical
Pwr=120
Acc=100
Eff=d

[thunder]
Type=3
;Ctg=special
Pwr=120
Acc=70
Eff=ds03030

[thunder fang]
Type=3
;Ctg=physical
Pwr=65
Acc=95
Eff=ds03010

[thunder wave]
Type=3
;Ctg=status
Pwr=0
Acc=100
Eff=s03100

[thunderbolt]
Type=3
;Ctg=special
Pwr=95
Acc=100
Eff=ds03010

[thunderpunch]
Type=3
;Ctg=physical
Pwr=75
Acc=100
Eff=ds03010

[thundershock]
Type=3
;Ctg=special
Pwr=40
Acc=100
Eff=ds03010

[tickle]
Type=0
;Ctg=status
Pwr=0
Acc=100
Eff=m00100-1m01100-1
;[torment]
;Type=15
;Ctg=status
;Pwr=0
;Acc=100
;Eff=

[toxic]
Type=7
;Ctg=status
Pwr=0
Acc=90
Eff=s02100
;[toxic spikes]
;Type=7
;Ctg=status
;Pwr=0
;Eff=
;[transform]
;Type=0
;Ctg=status
;Pwr=0
;Eff=

[tri attack]
Type=0
;Ctg=special
Pwr=80
Acc=100
Eff=ds01006s03006s04006
;[trick]
;Type=10
;Ctg=status
;Pwr=0
;Acc=100
;Eff=
;[trick room]
;Type=10
;Ctg=status
;Pwr=0
;Eff=

[triple kick]
Type=6
;Ctg=physical
Pwr=10
Acc=90
Eff=d

[trump card]
Type=0
;Ctg=special
;Pwr=
Eff=d
Acc=100

[twineedle]
Type=11
;Ctg=physical
Pwr=25
Acc=100
Eff=ds02020

[twister]
Type=14
;Ctg=special
Pwr=40
Acc=100
Eff=df20

[u-turn]
Type=11
;Ctg=physical
Pwr=70
Acc=100
Eff=d

[uproar]
Type=0
;Ctg=special
Pwr=90
Acc=100
Eff=d

[v-create]
Type=1
;Ctg=physical
Pwr=180
Acc=95
Eff=dm11100-1m12100-1

[vacuum wave]
Type=6
;Ctg=special
Pwr=40
Acc=100
Eff=d

[venoshock]
Type=7
;Ctg=special
Pwr=65
Acc=100
Eff=d

[vicegrip]
Type=0
;Ctg=physical
Pwr=55
Acc=100
Eff=d

[vine whip]
Type=4
;Ctg=physical
Pwr=35
Acc=100
Eff=d

[vital throw]
Type=6
;Ctg=physical
Pwr=70
Acc=-1
Eff=d

[volt switch]
Type=3
;Ctg=special
Pwr=70
Acc=100
Eff=d

[volt tackle]
Type=3
;Ctg=physical
Pwr=120
Acc=100
Eff=ds03010r0033

[wake-up slap]
Type=6
;Ctg=physical
Pwr=60
Acc=100
Eff=d

[water gun]
Type=2
;Ctg=special
Pwr=40
Acc=100
Eff=d

[water pledge]
Type=2
;Ctg=special
Pwr=50
Acc=100
Eff=d

[water pulse]
Type=2
;Ctg=special
Pwr=60
Acc=100
Eff=ds05020
;[water sport]
;Type=2
;Ctg=status
;Pwr=0
;Acc=100
;Eff=

[water spout]
Type=2
;Ctg=special
;Pwr=
Acc=100
Eff=d

[waterfall]
Type=2
;Ctg=physical
Pwr=80
Acc=100
Eff=df20

[weather ball]
Type=0
;Ctg=special
Pwr=50
Acc=100
Eff=d

[whirlpool]
Type=2
;Ctg=special
Pwr=35
Acc=85
Eff=d
;[whirlwind]
;Type=0
;Ctg=status
;Pwr=0
;Acc=100
;Eff=
;[wide guard]
;Type=12
;Ctg=status
;Pwr=0
;Eff=

[wild charge]
Type=3
;Ctg=physical
Pwr=90
Acc=100
Eff=dr0025

[will-o-wisp]
Type=1
;Ctg=status
Pwr=0
Acc=75
Eff=s01100

[wing attack]
Type=9
;Ctg=physical
Pwr=60
Acc=100
Eff=d
;[wish]
;Type=0
;Ctg=status
;Pwr=0
;Acc=100
;Eff=

[withdraw]
Type=2
;Ctg=status
Pwr=0
Eff=m11100+1
Name=withdraw
Acc=-1
;[wonder room]
;Type=10
;Ctg=status
;Pwr=0
;Eff=

[wood hammer]
Type=4
;Ctg=physical
Pwr=120
Acc=100
Eff=dr0033

[work up]
Type=0
;Ctg=status
Pwr=0
Eff=m10100+1
Name=work up
Acc=-1
;[worry seed]
;Type=4
;Ctg=status
;Pwr=0
;Acc=100
;Eff=

[wrap]
Type=0
;Ctg=physical
Pwr=15
Acc=90
Eff=d

[wring out]
Type=0
;Ctg=special
;Pwr=
Acc=100
Eff=d

[x-scissor]
Type=11
;Ctg=physical
Pwr=80
Acc=100
Eff=d
;[yawn]
;Type=0
;Ctg=status
;Pwr=0
;Acc=100
;Eff=

[zap cannon]
Type=3
;Ctg=special
Pwr=120
Acc=50
Eff=ds03100

[zen headbutt]
Type=10
;Ctg=physical
Pwr=80
Acc=90
Eff=df10`;
